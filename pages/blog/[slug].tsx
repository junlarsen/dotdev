import React from 'react'
import ErrorPage from 'next/error'
import { GetStaticPropsContext, GetStaticPropsResult } from 'next'
import { useRouter } from 'next/router'
import { SEO } from '../../components/SEO'
import { Nav } from '../../components/Nav'
import { Header, Text } from '../../components/Text'
import { LayoutSection } from '../../components/Layout'
import { getAllPosts, getPost, PostSchema } from '../../lib/api'

export default function Post({ post }: { post: PostSchema }) {
  const router = useRouter()
  if (!router.isFallback && !post.slug) {
    return <ErrorPage statusCode={404} />
  }

  return (
    <main>
      <SEO
        title={`supergrecko.dev | ${post.title}`}
        description={`${post.brief}...`}
        image={post?.image ?? 'https://supergrecko.dev/favicon.png'}
        imageDescription={post?.imageDescription ?? 'A picture of a cat, I like cats.'}
        canonical={`https://supergrecko.dev/blog/${post.slug}`}
      />

      <LayoutSection backgroundColor='bg-background'>
        <Nav
          links={[
            { href: '/about', text: 'About' },
            { href: '/blog', text: 'Blog' },
            { href: '/#contact', text: 'Contact' }
          ]}
        />

        <div className='py-16'>
          <Header>{post.title}</Header>
          <Text>
            {post.author} &mdash; {new Date(post.date * 1000).toLocaleDateString()} &mdash; {post.readingTime}{' '}
          </Text>
          <hr className='text-primary my-2' />
          <Text>{post.brief}</Text>
        </div>
      </LayoutSection>

      <LayoutSection backgroundColor='bg-white'>
        <div className='py-16'>
          <div className='blog-prose'
               dangerouslySetInnerHTML={{ __html: post.content ?? '' }} />
        </div>
      </LayoutSection>
    </main>
  )
}

export async function getStaticProps(
  { params }: GetStaticPropsContext<{ slug: string }>
): Promise<GetStaticPropsResult<{ post: PostSchema }>> {
  const post = await getPost(params!.slug)

  return {
    props: {
      post
    }
  }
}

export async function getStaticPaths() {
  const allPosts = await getAllPosts()

  return {
    paths: allPosts.map((post) => ({
      params: {
        slug: post.slug
      }
    })),
    fallback: false
  }
}
