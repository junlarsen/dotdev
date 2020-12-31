import React, { ReactNode, Fragment } from 'react'
import Link from 'next/link'
import { PostSchema } from '../lib/api'
import { Text, Header } from './Text'

export type ArticleItemProps = {} & Omit<PostSchema, 'content'>

export function ArticleItem({
  brief,
  title,
  author,
  date,
  readingTime,
  slug,
  topics
}: ArticleItemProps): JSX.Element {
  return (
    <div>
      <Text color="text-black">{author} &mdash; {new Date(date * 1000).toLocaleDateString()} &mdash; {readingTime}</Text>
      <Link href={`/blog/${slug}`}>
        <a>
          <Header size="text-5xl" color="text-black">{title}</Header>
        </a>
      </Link>
      <Text color="text-secondary">{brief}...</Text>
      {topics.length > 0 ? (
        <div className="space-x-4 my-2">
          {topics.map(topic => (
            <Pill>{topic}</Pill>
          ))}
        </div>
      ) : <Fragment />}
    </div>
  )
}

export type PillProps = {
  children: ReactNode
}

export function Pill({
  children,
}: PillProps): JSX.Element {
  return (
    <span className="w-auto rounded-lg bg-primary p-1 font-noto-sans text-2xl text-secondary">
      {children}
    </span>
  )
}