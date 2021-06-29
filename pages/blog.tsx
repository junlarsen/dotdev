import React from 'react'
import { GetStaticPropsResult } from 'next'
import { LayoutSection } from '../components/Layout'
import { Wave } from '../components/Svg'
import { Nav } from '../components/Nav'
import { Header, Text } from '../components/Text'
import { ArticleItem } from '../components/Article'
import { SEO } from '../components/SEO'
import { getAllPosts, PostSchema } from '../lib/api'


export type BlogProps = {
  posts: Omit<PostSchema, 'content'>[]
  allTopics: string[]
}

export default function Blog({ posts }: BlogProps) {
  return (
    <main>
      <SEO
        title="supergrecko.dev | blog"
        description="This is my blog. I occasionally write about things which are important to me. You'll find these articles here."
        image="https://supergrecko.dev/favicon.png"
        imageDescription="A picture of a cat, I like cats."
        canonical="https://supergrecko.dev/"
      />

      <LayoutSection backgroundColor="bg-background" footer={<Wave />}>
        <Nav
          links={[
            { href: '/about', text: 'About' },
            { href: '/blog', text: 'Blog' },
            { href: '/#contact', text: 'Contact' }
          ]}
        />

        <div className="pt-16 md:pt-32 pb-16">
          <Header element="h1">How did we get here? 🤔</Header>
          <Text size="text-3xl">This is my blog. I occasionally write about things which are important to me.</Text>
        </div>
      </LayoutSection>

      <LayoutSection backgroundColor="bg-white">
        {posts.length > 0 ? (
          <div className="space-y-32 py-16">
            {posts.map((post) => (
              <ArticleItem {...post} />
            ))}
          </div>
        ) : (
          <div className="py-16 md:py-64">
            <Header color="text-secondary" id="about">
              Not yet ...
            </Header>
            <Text color="text-secondary">This space is empty because I couldn't find any articles 😢</Text>
          </div>
        )}
      </LayoutSection>
    </main>
  )
}

export async function getStaticProps(): Promise<GetStaticPropsResult<{ posts: PostSchema[] }>> {
  const posts = await getAllPosts()

  return {
    props: {
      posts: posts.map((post) => ({
        ...post,
        content: null
      }))
    }
  }
}
