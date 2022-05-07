import fs from 'node:fs/promises';
import assert from 'node:assert';
import reading from 'reading-time';
import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemoteSerializeResult } from 'next-mdx-remote';
import { BlogPost, blogPostSchema } from './blog-post';
import matter from 'gray-matter';

export type BlogPostResult = {
  source: MDXRemoteSerializeResult;
  time: number;
  meta: BlogPost;
};

export abstract class AbstractMarkdownService {
  public abstract getBlogPost(path: string): Promise<BlogPostResult>;
}

export class MarkdownService implements AbstractMarkdownService {
  public async getBlogPost(path: string): Promise<BlogPostResult> {
    assert((await fs.lstat(path)).isFile(), `${path} is not a file`);
    const source = await fs.readFile(path, 'utf8');
    const { minutes } = reading(source);
    const { data, content } = matter(source);
    const mdx = await serialize(content);
    const metadata = blogPostSchema.safeParse(data);
    if (metadata.success) {
      return {
        meta: metadata.data,
        time: minutes,
        source: mdx,
      };
    }
    throw new Error(`Failed to parse ${path}: ${metadata.error.message}`);
  }
}
