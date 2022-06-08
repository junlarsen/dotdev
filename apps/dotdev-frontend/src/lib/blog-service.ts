import path from 'node:path';
import fs from 'node:fs/promises';
import assert from 'node:assert';
import process from 'node:process';
import { AbstractMarkdownService, BlogPostResult } from './markdown-service';

export abstract class AbstractBlogService {
  public abstract getBlogPost(slug: string): Promise<BlogPostResult>;
  public abstract getBlogPosts(): Promise<string[]>;
}

export class BlogService implements AbstractBlogService {
  private static readonly ROOT_DIRECTORY = path.join(process.cwd(), 'content/blog');

  public constructor(private readonly markdownService: AbstractMarkdownService) {}

  public async getBlogPost(slug: string): Promise<BlogPostResult> {
    const target = path.join(BlogService.ROOT_DIRECTORY, slug + '.mdx');
    assert((await fs.lstat(target)).isFile(), `Blog post ${slug} does not exist`);
    return this.markdownService.getBlogPost(target);
  }

  public async getBlogPosts(): Promise<string[]> {
    const root = path.join(process.cwd(), 'content/blog');
    assert((await fs.lstat(root)).isDirectory(), `${root} is not a directory`);
    const files = await fs.readdir(root);
    return files.filter((file) => file.endsWith('.mdx')).map((file) => path.basename(file, '.mdx'));
  }
}
