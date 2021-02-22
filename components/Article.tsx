import React, { ReactNode, Fragment } from 'react'
import Link from 'next/link'
import { PostSchema } from '../lib/api'
import { Text, Header } from './Text'

export type ArticleItemProps = {} & Omit<PostSchema, 'content'>

export function ArticleItem({ brief, title, author, date, readingTime, slug, topics }: ArticleItemProps): JSX.Element {
  return (
    <div>
      <div className="hidden md:inline-block">
        <Text color="text-black">
          {author} &mdash; {new Date(date * 1000).toLocaleDateString()} &mdash; {readingTime}
        </Text>
      </div>
      <Link href={`/blog/${slug}`}>
        <a>
          <Header size="text-5xl" color="text-primary">
            {title}
          </Header>
        </a>
      </Link>
      <Text color="text-background">{brief}...</Text>
      {topics.length > 0 ? (
        <div className="space-x-4 my-2">
          {topics.map((topic) => (
            <Pill>{topic}</Pill>
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
