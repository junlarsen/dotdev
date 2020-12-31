import React, { PropsWithChildren } from 'react'
import ErrorPage from 'next/error'
import { useRouter } from 'next/router'
import { getAllPosts, getPost, PostSchema } from '../../lib/api'
import { Params } from 'next/dist/next-server/server/router'
import SEO from '../../components/SEO'
import { Wave } from '../../components/Svg'
import Nav from '../../components/Nav'
import { Header, Text } from '../../components/Text'
import Button from '../../components/Button'
import { LayoutSection } from '../../components/Layout'
import Contact from '../../components/Contact'

export default function Post({ post }: { post: PostSchema }) {
  const router = useRouter()
  if (!router.isFallback && !post.slug) {
    return (
      <ErrorPage statusCode={404} />
    )
  }

  return (
    <main>
      <SEO
        title={`supergrecko.dev | ${post.title}`}
        description={`${post.brief}...`}
        image={post?.image ?? "https://supergrecko.dev/favicon.png"}
        imageDescription={post?.imageDescription ?? "A picture of a kitten"}
        canonical={`https://supergrecko.dev/blog/${post.slug}`}
      />

      <LayoutSection backgroundColor="bg-secondary">
        <Nav links={[
          { href: '#about', text: 'About' },
          { href: '/blog', text: 'Blog' },
          { href: '#contact', text: 'Contact' }
        ]} />

        <div className="py-16">
          <Header>{post.title}</Header>
          <Text>{post.author} &mdash; {new Date(post.date * 1000).toLocaleDateString()} &mdash; {post.readingTime} </Text>
          <hr className="text-primary my-2" />
          <Text>{post.brief}</Text>
        </div>
      </LayoutSection>

      <LayoutSection backgroundColor="bg-white">
        <div className="py-16 md:py-32">
          <div className="blog-prose" dangerouslySetInnerHTML={{ __html: post.content }} />
        </div>
      </LayoutSection>
      <Contact />
    </main>
  )
}

export async function getStaticProps({ params }: Params): Promise<Params> {
  const post = await getPost(params.slug)

  return {
    props: {
      post
    }
  }
}

export async function getStaticPaths() {
  const allPosts = await getAllPosts()

  return {
    paths: allPosts.map(post => ({
      params: {
        slug: post.slug
      }
    })),
    fallback: false
  }
}