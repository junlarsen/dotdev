import React, { useEffect, useState } from 'react'
import { Box, Container } from '../components/flex'
import { Heading, Link, Text } from '../components/typography'
import { Article, getArticles } from '../lib/mdx'
import { GetStaticPropsResult } from 'next'
import { GithubActivityStream } from '../types/github-activity-stream'
import { HorizontalDivider, Section } from '../components/section'
import { SiteMetadata } from '../components/metadata'
import { SplitLayout } from '../layouts/split'

const GITHUB_ACTIVITY_ENDPOINT =
  process.env.NODE_ENV === 'development'
    ? 'https://cors-anywhere.herokuapp.com/https://api.supergrecko.dev/github/activity-stream'
    : 'https://api.supergrecko.dev/github/activity-stream'

export interface IndexProps {
  articles: Article[]
}

export default function Index({ articles }: IndexProps) {
  const [loading, setLoading] = useState(true)
  const [activies, setActivities] = useState<GithubActivityStream.Response>()

  useEffect(() => {
    fetch(GITHUB_ACTIVITY_ENDPOINT)
      .then((res) => res.json() as Promise<GithubActivityStream.Response>)
      .then((res) => {
        setLoading(false)
        setActivities(res)
      })
  }, [articles])

  return (
    <SplitLayout>
      <Heading>Hi, I'm Mats 👋</Heading>
      <Section>
        <Text>
          I'm a student living in Norway and I like to spend my spare time working on open-source software, playing
          video games, cooking and watching anime.
        </Text>
      </Section>
      <Section>
        <Text>
          I'm currently studying computer science at the Norwegian University of Science and Technology, and I've been
          programming as a hobby for the past four years.
        </Text>
      </Section>
      <Section>
        <Text>
          You can usually find me hacking on{' '}
          <Link href="https://github.com/compiler-explorer/compiler-explorer">Compiler Explorer</Link>, watching{' '}
          <Link href="https://anilist.co/user/supergrecko">anime</Link> or hanging out. Please don't hesitate to contact
          me, I'll get back to you as soon as possible
        </Text>
      </Section>
      <HorizontalDivider />
      {articles.length > 0 && (
        <>
          <Container flexDirection="column" className="space-y-5">
            {articles.slice(0, 3).map((article) => (
              <a href={`/blog/${article.metadata.slug}`} key={article.metadata.title}>
                <Text size="sm">
                  {new Date(article.metadata.date).toLocaleDateString()} - {article.metadata.readingTime}
                </Text>
                <Heading>{article.metadata.title}</Heading>
                <Text>{article.metadata.brief}</Text>
              </a>
            ))}
          </Container>
          <Section>
            <Link href="/blog">View all blog posts</Link>
          </Section>
          <HorizontalDivider />
        </>
      )}
      <Section>
        <Heading>Recent open-source activity</Heading>
        <Text>
          Here are some of my latest contributions to open-source software. I participate in open-source because I think
          it's extremely fun (and often challenging)
        </Text>
      </Section>
      {loading && <Text color="white">Loading recent GitHub activity ...</Text>}
      {activies && (
        <Container flexDirection="column" className="space-y-5">
          {activies.user.pullRequests.edges
            .slice(-5)
            .reverse()
            .map((edge) => (
              <Box key={edge.node.url}>
                <Text size="sm">
                  Opened PR:{' '}
                  <Link href={edge.node.url}>
                    {edge.node.repository.nameWithOwner} #{edge.node.number}
                  </Link>
                </Text>
                <Text size="lg" color="green">
                  {edge.node.title}
                </Text>
                <Text>{edge.node.body.split(' ').slice(0, 15).join(' ')}...</Text>
              </Box>
            ))}
        </Container>
      )}
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
