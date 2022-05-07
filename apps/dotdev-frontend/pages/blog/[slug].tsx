import { GetStaticPaths, GetStaticProps } from 'next';
import { AbstractBlogService, BlogService } from '../../lib/blog-service';
import { AbstractMarkdownService, BlogPostResult, MarkdownService } from '../../lib/markdown-service';
import { Page } from '../../components/layouts/page';
import { MDXRemote } from 'next-mdx-remote';

export type BlogProps = { article: BlogPostResult };

export default function App(props: BlogProps): JSX.Element {
  const { article } = props;
  return (
    <Page>
      <div className="tw-w-full md:tw-w-2/3 tw-p-2">
        {article.meta.title}
        <MDXRemote compiledSource={article.source.compiledSource} />
      </div>
    </Page>
  );
}
export const getStaticProps: GetStaticProps<object, { slug: string }> = async (props) => {
  const markdownService: AbstractMarkdownService = new MarkdownService();
  const blogService: AbstractBlogService = new BlogService(markdownService);
  const slug = props?.params?.slug ?? 'does-not-exist';
  try {
    const article = await blogService.getBlogPost(slug);
    return {
      props: {
        article,
      },
    };
  } catch (err) {
    return {
      notFound: true,
    };
  }
};

export const getStaticPaths: GetStaticPaths = async () => {
  const markdownService: AbstractMarkdownService = new MarkdownService();
  const blogService: AbstractBlogService = new BlogService(markdownService);
  const blogs = await blogService.getBlogPosts();
  return {
    paths: blogs.map((blog) => {
      return {
        params: {
          slug: blog,
        },
      };
    }),
    fallback: 'blocking',
  };
};
