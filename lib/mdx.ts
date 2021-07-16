import fs from 'fs/promises'
import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemoteSerializeResult } from 'next-mdx-remote'
import path from 'path'
import matter from 'gray-matter'
import readingTime from 'reading-time'

export const POSTS_ROOT_DIRECTORY = path.join(process.cwd(), 'articles')

export interface PostMetadata {
  author: string
  date: number
  title: string
  brief: string
  topics: string[]
  readingTime: string
  imageUrl: string
  imageAlt: string
  slug: string
}

export interface Post {
  source: MDXRemoteSerializeResult
  metadata: PostMetadata
}

export async function getSlugs(): Promise<string[]> {
  const status = await fs.stat(POSTS_ROOT_DIRECTORY)
  if (status.isDirectory()) {
    return await fs.readdir(POSTS_ROOT_DIRECTORY)
  }
  return []
}

export async function getArticle(slug: string): Promise<Post> {
  const articleName = slug.replace(/\.mdx$/, '')
  const articlePath = path.join(POSTS_ROOT_DIRECTORY, `${articleName}.mdx`)
  const contents = await fs.readFile(articlePath, 'utf-8')
  const reading = readingTime(contents)
  const { data, content } = matter(contents)
  const source = await serialize(content)

  return {
    source,
    metadata: {
      author: data.author,
      date: data.date * 1000,
      title: data.title,
      brief: data.brief,
      topics: data.topics,
      readingTime: reading.text,
      imageUrl: data.imageUrl,
      imageAlt: data.imageAlt,
      slug: articleName
    }
  }
}

export async function getArticles(): Promise<Post[]> {
  const slugs = await getSlugs()
  const posts = await Promise.all([...slugs.map((slug) => getArticle(slug))])
  return posts.sort((x, y) => (x.metadata.date > y.metadata.date ? -1 : 1))
}
