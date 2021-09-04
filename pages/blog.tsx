import React from 'react'
import { GetStaticPropsResult } from 'next'
import { getArticles, Article } from '../lib/mdx'
import { Heading, Link, Text } from '../components/typography'
import { SplitLayout } from '../components/layouts/split'
import { HorizontalDivider, Section } from '../components/section'
import { Box, Container } from '../components/flex'

export type BlogProps = {
  articles: Article[]
}

export default function Blog({ articles }: BlogProps) {
  return (
    <SplitLayout>
      <Heading>How did we get here? 🤔</Heading>
      <Text>This is my blog. I occasionally write about things which are important to me or interest me.</Text>
      <Section>
        <Link href="/">Go back home</Link>
      </Section>
      <HorizontalDivider />
      <Container flexDirection="column" className="space-y-5">
        {articles.map((article) => (
          <Box key={article.metadata.title}>
            <Text size="sm">
              {new Date(article.metadata.date).toLocaleDateString()} - {article.metadata.readingTime}
            </Text>
            <Link href={`/blog/${article.metadata.slug}`}>{article.metadata.title}</Link>
            <Text>{article.metadata.brief}</Text>
            <Container flexDirection="row" className="space-x-2">
              {article.metadata.topics.map((topic) => (
                <Box key={topic} className="rounded bg-green p-1">
                  <Text size="sm" color="background">
                    {topic}
                  </Text>
                </Box>
              ))}
            </Container>
          </Box>
        ))}
      </Container>
    </SplitLayout>
  )
}

export async function getStaticProps(): Promise<GetStaticPropsResult<BlogProps>> {
  const articles = await getArticles()
  return {
    props: {
      articles
    }
  }
}
