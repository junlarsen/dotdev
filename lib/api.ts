import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import readingTime from 'reading-time'
import remark from 'remark'
import html from 'remark-html'

export type PostSchema = {
  author: string
  date: number
  title: string
  content: string
  slug: string
  readingTime: string
  topics: string[]
  brief: string
}

const ARTICLES_SOURCE = path.join(process.cwd(), "articles")

export async function getAllSlugs(): Promise<string[]> {
  return await fs.promises.readdir(ARTICLES_SOURCE)
}

export async function getPost(slug: string): Promise<PostSchema> {
  const name = slug.replace(/\.md$/, '')
  const realPath = path.join(ARTICLES_SOURCE, `${name}.md`)
  const article = await fs.promises.readFile(realPath, 'utf8')
  const frontMatter = matter(article)
  const stats = readingTime(article)
  const markdown = await toHtml(frontMatter.content)

  return {
    slug: name,
    author: frontMatter.data.author,
    title: frontMatter.data.title,
    content: markdown,
    date: frontMatter.data.date,
    readingTime: stats.text,
    topics: frontMatter.data.topics ?? [],
    brief: frontMatter.data.brief ?? ""
  }
}

export async function getAllPosts(): Promise<PostSchema[]> {
  const allSlugs = await getAllSlugs()
  const allPosts = await Promise.all([
    ...allSlugs.map(slug => getPost(slug))
  ])

  return allPosts.sort((x, y) => x.date > y.date ? -1 : 1)
}

export async function toHtml(markdown: string): Promise<string> {
  const md = await remark().use(html).process(markdown)

  return md.toString()
}