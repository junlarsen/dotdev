import { Page } from '../components/layouts/page';
import { Heading } from '../components/typography/heading';
import { Paragraph } from '../components/typography/paragraph';
import { AbstractMarkdownService, BlogPostResult, MarkdownService } from '../lib/markdown-service';
import { GetStaticProps } from 'next';
import { AbstractBlogService, BlogService } from '../lib/blog-service';
import { Link } from '../components/typography/link';
import { TagList } from '../components/tag/tag_list';
import { Tag } from '../components/tag/tag';

export type BlogProps = {
  articles: [string, BlogPostResult][];
};

export default function App(props: BlogProps): JSX.Element {
  const { articles } = props;
  return (
    <Page>
      <div className="tw-p-2">
        <Heading size={1}>The Blog ✍</Heading>
        <Paragraph>
          It is a long established fact that a reader will be distracted by the readable content of a page when looking
          at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as
          opposed to using &apos;Content here, content here&apos;, making it look like readable English.
        </Paragraph>

        {articles.map(([slug, article]) => (
          <div key={article.meta.date} className="tw-mt-8">
            <div className="tw-flex tw-flex-row tw-justify-between tw-items-center">
              <Link href={`/blog/${slug}`}>
                <Heading size={2}>{article.meta.title}</Heading>
              </Link>
              <span className="tw-text-secondary">{Math.ceil(article.time)} min read</span>
            </div>
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
  const articles = await Promise.all(
    slugs.map(async (slug) => {
      return [slug, await blogService.getBlogPost(slug)];
    }),
  );
  return {
    props: {
      articles,
    },
  };
};
