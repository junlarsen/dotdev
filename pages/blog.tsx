import React from 'react'
import { getAllPosts, PostSchema } from '../lib/api'
import { Params } from 'next/dist/next-server/server/router'
import { LayoutSection } from '../components/Layout'
import { Wave } from '../components/Svg'
import Nav from '../components/Nav'
import { Header, Text } from '../components/Text'
import Contact from '../components/Contact'
import { ArticleItem } from '../components/Article'

export type BlogProps = {
  posts: Omit<PostSchema, 'content'>[],
  allTopics: string[]
}

export default function Blog({ posts }: BlogProps) {
  return (
    <main id="top">
      <LayoutSection
        backgroundColor="bg-secondary"
        footer={(<Wave />)}
      >
        <Nav links={[
          { href: '/#about', text: 'About' },
          { href: '/blog', text: 'Blog' },
          { href: '#contact', text: 'Contact' }
        ]} />

        <div className="pt-16 md:pt-32 pb-16">
          <Header element="h1">How did we get here? 🤔</Header>
          <Text>This is my blog. I occasionally write about things which are important to me. You'll find these articles here.</Text>
        </div>
      </LayoutSection>

      <LayoutSection backgroundColor="bg-white">
        {posts.length > 0 ? (
          <div className="space-y-32 py-16">
            {posts.map(post => (
              <ArticleItem {...post} />
            ))}
          </div>
        ) : (
          <div className="py-16 md:py-64">
            <Header color="text-secondary" id="about">Not yet ...</Header>
            <Text color="text-secondary">We've searched far and wide, but we failed to find any articles!</Text>
          </div>
        )}
      </LayoutSection>
      <Contact />
    </main>
  )
}

export async function getStaticProps(): Promise<Params> {
  const posts = await getAllPosts()

  return {
    props: {
      posts: posts.map(post => ({
        ...post,
        content: null
      })),
    }
  }
}