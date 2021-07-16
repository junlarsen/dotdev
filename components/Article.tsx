import React, { ReactNode, Fragment } from 'react'
import Link from 'next/link'
import { Text, Header } from './Text'
import { Post } from '../lib/mdx'

export function ArticleItem({ metadata }: Post): JSX.Element {
  return (
    <div>
      <div className="hidden md:inline-block">
        <Text color="text-black">
          {metadata.author} &mdash; {new Date(metadata.date).toLocaleDateString()} &mdash; {metadata.readingTime}
        </Text>
      </div>
      <Link href={`/blog/${metadata.slug}`}>
        <a>
          <Header size="text-5xl" color="text-primary">
            {metadata.title}
          </Header>
        </a>
      </Link>
      <Text color="text-background">{metadata.brief}</Text>
      {metadata.topics.length > 0 ? (
        <div className="space-x-4 my-2">
          {metadata.topics.map((topic) => (
            <Pill key={topic}>{topic}</Pill>
          ))}
        </div>
      ) : (
        <Fragment />
      )}
      <hr className="my-6 text-secondary" />
    </div>
  )
}

export type PillProps = {
  children: ReactNode
}

export function Pill({ children }: PillProps): JSX.Element {
  return (
    <span className="w-auto rounded-lg border-2 border-primary px-2 py-1 font-noto-sans text-2xl text-background">
      {children}
    </span>
  )
}
