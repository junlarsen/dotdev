import React from 'react'
import { Box, Container } from '../components/flex'
import { Heading, Link, Text } from '../components/typography'
import { Article, getArticles } from '../lib/mdx'
import { GetStaticPropsResult } from 'next'
import { Section } from '../components/section'
import { SiteMetadata } from '../components/metadata'
import { SplitLayout } from '../components/layouts/split'
import { isPreviewMode } from '../components/lib'

export interface IndexProps {
  articles: Article[]
}

export default function Index({ articles }: IndexProps) {
  const posts = isPreviewMode() ? articles : articles.filter((it) => it.metadata.public)

  return (
    <SplitLayout>
      <SiteMetadata
        title="Home | supergrecko.dev"
        description="Hi, I'm Mats 👋. I am student living in Norway and I like to spend my spare time working on open-source software, playing
          video games, cooking and watching anime."
        canonical="https://supergrecko.dev/"
        imageUrl="/favicon.png"
        imageAlt=""
      />
      <Heading>Hi, I'm Mats 👋</Heading>
      <Section>
        <Text>
          I'm a student living in Norway and I like to spend my spare time
          working on open-source software, playing
          video games, cooking and watching anime.
        </Text>
      </Section>
      <Section>
        <Text>
          I'm currently studying computer science at the Norwegian University of
          Science and Technology, and I've been
          programming as a hobby for the past four years.
        </Text>
      </Section>
      <Section>
        <Text>
          You can usually find me hacking on{' '}
          <Link href="https://github.com/compiler-explorer/compiler-explorer">Compiler
            Explorer</Link>, watching{' '}
          <Link href="https://anilist.co/user/supergrecko">anime</Link> or
          hanging out. Feel free to contact me, I'll
          get back to you as soon as possible 🙂
        </Text>
      </Section>
      {posts.length > 0 && (
        <>
          <Section>
            <Heading>Recent blog posts</Heading>
            <Text>
              I occasionally write about things I like, and when I do, I write
              it down <Link href="/blog">here</Link>.
            </Text>
          </Section>
          <Container flexDirection="column" className="space-y-5">
            {posts.slice(0, 3).map((article) => (
              <Box key={article.metadata.slug}
                   className="pl-4 border-l-4 border-primary">
                <Link
                  href={`/blog/${article.metadata.slug}`}>{article.metadata.title}</Link>
                <Text>{article.metadata.brief}</Text>
              </Box>
            ))}
          </Container>
        </>
      )}
      <Section>
        <Heading>Recent open-source activity</Heading>
        <Text>
          Here is a feed of my recent open-source contributions. I contribute to
          open-source software because I enjoy it
          and because open-source is very valuable to me.
        </Text>
      </Section>
    </SplitLayout>
  )
}

export async function getStaticProps(): Promise<GetStaticPropsResult<IndexProps>> {
  const articles = await getArticles()
  return {
    props: {
      articles
    }
  }
}
