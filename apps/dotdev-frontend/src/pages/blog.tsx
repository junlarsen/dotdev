import { Page } from '../templates/page';
import { Heading } from '../atoms/typography/heading';
import { Paragraph } from '../atoms/typography/paragraph';
import { AbstractMarkdownService, BlogPostResult, MarkdownService } from '../lib/markdown-service';
import { GetStaticProps } from 'next';
import { AbstractBlogService, BlogService } from '../lib/blog-service';
import { Link } from '../atoms/typography/link';
import Head from 'next/head';
import { Headline } from '../atoms/typography/headline';
import { Badge } from '../atoms/badge/badge';
import { BadgeList } from '../atoms/badge/badge_list';
import { css } from '../stitches';

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
      <div className={containerStyles()}>
        <Headline>The Blog ✍</Headline>
        <Paragraph>
          This is my personal blog, a neat and tidy place to write about my thoughts, goals and experiences. You can
          expect to find articles related to software development, food, travel and other hobbies and things I&apos;m
          interested in &ndash; the possibilities are endless! 🚀
        </Paragraph>

        {articles.length === 0 && (
          <div className={boxStyles()}>
            <img className={imageStyles()} src="/undraw_web_development.png" alt="Under construction" />
              <Heading size={2}>No posts found</Heading>
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
            <BadgeList>
              {article.meta.tags.map((tag) => (
                <Badge key={tag}>{tag}</Badge>
              ))}
            </BadgeList>
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

const containerStyles = css({
  padding: '0.5rem',
})

const imageStyles = css({
  padding: '0 4rem',
  '@md': {
    padding: '0 8rem',
  }
})

const boxStyles = css({
  textAlign: 'center',
})
