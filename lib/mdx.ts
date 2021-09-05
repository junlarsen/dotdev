import path from 'path'
import matter from 'gray-matter'
import readingTime from 'reading-time'
import { promises as fs } from 'fs'
import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemoteSerializeResult } from 'next-mdx-remote'

export const POSTS_ROOT_DIRECTORY = path.join(process.cwd(), 'articles')

export interface ArticleMetadata {
  author: string
  date: number
  title: string
  brief: string
  topics: string[]
  readingTime: string
  imageUrl: string
  imageAlt: string
  slug: string
  public: boolean
}

export interface Article {
  source: MDXRemoteSerializeResult
  metadata: ArticleMetadata
}

export async function getSlugs(): Promise<string[]> {
  const status = await fs.stat(POSTS_ROOT_DIRECTORY)
  if (status.isDirectory()) {
    const files = await fs.readdir(POSTS_ROOT_DIRECTORY)
    return files.filter((file) => !file.startsWith('.'))
  }
  return []
}

export async function getArticle(slug: string): Promise<Article> {
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
      public: data.public !== false,
      slug: articleName
    }
  }
}

export async function getArticles(): Promise<Article[]> {
  const slugs = await getSlugs()
  const posts = await Promise.all([...slugs.map((slug) => getArticle(slug))])
  const available = posts.filter((post) => post.metadata.public)
  return available.sort((x, y) => (x.metadata.date > y.metadata.date ? -1 : 1))
}
