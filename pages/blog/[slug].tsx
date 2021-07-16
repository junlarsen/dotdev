import React from 'react'
import { GetStaticPropsContext, GetStaticPropsResult } from 'next'
import { MDXRemote } from 'next-mdx-remote'
import { SEO } from '../../components/SEO'
import { Nav } from '../../components/Nav'
import { Header, Text } from '../../components/Text'
import { LayoutSection } from '../../components/Layout'
import { getArticle, getArticles, Post } from '../../lib/mdx'

export default function Article({ source, metadata }: Post) {
  return (
    <main>
      <SEO
        title={`supergrecko.dev | ${metadata.title}`}
        description={`${metadata.brief}...`}
        image={metadata.imageUrl}
        imageDescription={metadata.imageAlt ?? 'A picture of a cat, I like cats.'}
        canonical={`https://supergrecko.dev/blog/${metadata.slug}`}
      />

      <LayoutSection backgroundColor="bg-background">
        <Nav
          links={[
            { href: '/blog', text: 'Blog' },
            { href: '/#contact', text: 'Contact' }
          ]}
        />

        <div className="py-16">
          <Header>{metadata.title}</Header>
          <Text>
            {metadata.author} &mdash; {new Date(metadata.date).toLocaleDateString()} &mdash; {metadata.readingTime}{' '}
          </Text>
          <hr className="text-primary my-2" />
          <Text>{metadata.brief}</Text>
        </div>
      </LayoutSection>

      <LayoutSection backgroundColor="bg-white">
        <div className="py-16">
          <MDXRemote compiledSource={source.compiledSource} />
        </div>
      </LayoutSection>
    </main>
  )
}

export async function getStaticProps({
  params
}: GetStaticPropsContext<{ slug: string }>): Promise<GetStaticPropsResult<Post>> {
  const article = await getArticle(params?.slug ?? 'does_not_exist')
  return {
    props: {
      ...article
    }
  }
}

export async function getStaticPaths() {
  const allPosts = await getArticles()
  return {
    paths: allPosts.map((post) => ({
      params: {
        slug: post.metadata.slug
      }
    })),
    fallback: 'blocking'
  }
}
