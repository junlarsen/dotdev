import React, { ReactNode, useEffect } from 'react'
import { highlightAll } from 'prismjs'
import { GetStaticPropsContext, GetStaticPropsResult } from 'next'
import { MDXRemote } from 'next-mdx-remote'
import { getArticle, getArticles, Article } from '../../lib/mdx'
import { Heading, Link, Text } from '../../components/typography'
import { SplitLayout } from '../../layouts/split'
import { HorizontalDivider, Section } from '../../components/section'
import { Box, Container } from '../../components/flex'

const MDX_CUSTOM_COMPONENTS: Record<string, ReactNode> = {
  p: (props: any) => <Text {...props} />,
  a: (props: any) => <Link {...props} />,
  h1: (props: any) => <Heading size="2xl" {...props} />,
  h2: (props: any) => <Heading size="xl" {...props} />,
  h3: (props: any) => <Heading size="lg" {...props} />,
  h4: (props: any) => <Heading size="md" {...props} />,
  h5: (props: any) => <Heading size="sm" {...props} />,
  h6: (props: any) => <Heading size="sm" {...props} />,
  hr: (props: any) => <HorizontalDivider color="white" {...props} />,
  blockquote: (props: any) => <Box className="pl-3 border-l-2 border-blue bg-opacity-20 bg-blue" {...props} />,
  ul: (props: any) => <ul className="list-circle ml-7" {...props} />,
  ol: (props: any) => <ol className="list-decimal ml-7" {...props} />,
  li: (props: any) => <li {...props} />,
  pre: (props: any) => <pre className="font-jb p-1 border border-blue rounded" {...props} />,
  code: (props: any) => <code className="p-1" {...props} />,
  inlineCode: (props: any) => <code className="bg-blue bg-opacity-20 rounded font-jb" {...props} />,
  table: (props: any) => <table className="border-collapse w-full" {...props} />,
  thead: (props: any) => <thead className="bg-opacity-20 bg-blue" {...props} />,
  tbody: (props: any) => <tbody {...props} />,
  tr: (props: any) => <tr {...props} />,
  td: (props: any) => <td className="border border-blue p-1" {...props} />,
  th: (props: any) => <th className="border border-blue p-1" {...props} />
}

export default function Foo({ source, metadata }: Article) {
  useEffect(() => {
    highlightAll()
  }, [source, metadata])
  return (
    <main>
      <SplitLayout>
        <Text size="sm">
          {metadata.author} - {new Date(metadata.date).toLocaleDateString()} - {metadata.readingTime}
        </Text>
        <Heading>{metadata.title}</Heading>
        <Text>{metadata.brief}</Text>
        <Container flexDirection="row" className="space-x-2">
          {metadata.topics.map((topic) => (
            <Box key={topic} className="rounded bg-green p-1">
              <Text size="sm" color="background">
                {topic}
              </Text>
            </Box>
          ))}
        </Container>
        <Section>
          <Link href="/blog">Go back</Link>
        </Section>
        <HorizontalDivider />
        <Box className="font-nunito tracking-tight text-grey text-lg">
          <MDXRemote compiledSource={source.compiledSource} components={MDX_CUSTOM_COMPONENTS} />
        </Box>
      </SplitLayout>
    </main>
  )
}

export async function getStaticProps({
  params
}: GetStaticPropsContext<{ slug: string }>): Promise<GetStaticPropsResult<Article>> {
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
