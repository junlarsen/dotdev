import { Page } from '../components/layouts/page';
import { Heading } from '../components/typography/heading';
import { Paragraph } from '../components/typography/paragraph';
import { AbstractMarkdownService, BlogPostResult, MarkdownService } from '../lib/markdown-service';
import { GetStaticProps } from 'next';
import { AbstractBlogService, BlogService } from '../lib/blog-service';
import { Link } from '../components/typography/link';
import { TagList } from '../components/tag/tag_list';
import { Tag } from '../components/tag/tag';
import Head from 'next/head';
import { Headline } from '../components/typography/headline';

export type BlogProps = {
  articles: [string, BlogPostResult][];
};

export default function App(props: BlogProps): JSX.Element {
  const { articles } = props;
  return (
    <Page>
      <Head>
        <title>Blog | Jun&apos;s Crusty Corner</title>
        <meta name="description" content="This is my blog, a neat and tidy where I keep my thoughts and experiences." />
      </Head>
      <div className="tw-p-2">
        <Headline>The Blog ✍</Headline>
        <Paragraph>
          This is my personal blog, a neat and tidy place to write about my thoughts, goals and experiences. You can
          expect to find articles related to software development, food, travel and other hobbies and things I&apos;m
          interested in &ndash; the possibilities are endless! 🚀
        </Paragraph>

        {articles.length === 0 && (
          <div className="tw-text-center">
            <img className="tw-px-8 md:tw-px-32" src="/undraw_web_development.png" alt="Under construction" />
            <header className="tw-font-bold">
              <Heading size={2}>No posts found</Heading>
            </header>
            <Paragraph>Looks like there are no posts here yet, maybe I should get to work!</Paragraph>
          </div>
        )}

        {articles.map(([slug, article]) => (
          <div key={article.meta.date} className="tw-mt-8">
            <Link href={`/blog/${slug}`}>
              <Heading size={2}>
                {article.meta.title}
                <span className="tw-text-black tw-text-sm">&nbsp;&mdash; {Math.ceil(article.time)} min read</span>
              </Heading>
            </Link>
            <Paragraph>{article.meta.introduction}</Paragraph>
            <TagList>
              {article.meta.tags.map((tag) => (
                <Tag tag={tag} key={tag} />
              ))}
            </TagList>
          </div>
        ))}
      </div>
    </Page>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const markdownService: AbstractMarkdownService = new MarkdownService();
  const blogService: AbstractBlogService = new BlogService(markdownService);
  const slugs = await blogService.getBlogPosts();
  const all = await Promise.all(
    slugs.map(async (slug) => {
      return [slug, await blogService.getBlogPost(slug)] as const;
    }),
  );
  const visible = all.filter(([_, article]) => article.meta.public);
  return {
    props: {
      articles: visible,
    },
  };
};
