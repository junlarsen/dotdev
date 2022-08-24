import { GetStaticPaths, GetStaticProps } from 'next';
import { AbstractBlogService, BlogService } from '../../lib/blog-service';
import { AbstractMarkdownService, BlogPostResult, MarkdownService } from '../../lib/markdown-service';
import { Page } from '../../templates/page';
import { MDXRemote } from 'next-mdx-remote';
import { Link } from '../../atoms/typography/link';
import { Paragraph } from '../../atoms/typography/paragraph';
import { Heading } from '../../atoms/typography/heading';
import { Headline } from '../../atoms/typography/headline';

/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/no-explicit-any */
const MDX_CUSTOM_COMPONENTS = {
  p: (props: any) => <Paragraph {...props} />,
  a: (props: any) => <Link {...props} />,
  h1: (props: any) => <Headline {...props} />,
  h2: (props: any) => <Heading size={2} {...props} />,
  h3: (props: any) => <Heading size={3} {...props} />,
  h4: (props: any) => <Heading size={4} {...props} />,
  h5: (props: any) => <Heading size={5} {...props} />,
  h6: (props: any) => <Heading size={6} {...props} />,
  hr: (props: any) => <hr {...props} />,
  blockquote: (props: any) => <div className="tw-pl-3 tw-border-l-[3px] tw-border-primary tw-bg-stroke" {...props} />,
  ul: (props: any) => <ul className="tw-list-item tw-ml-7" {...props} />,
  ol: (props: any) => <ol className="tw-list-decimal tw-ml-7" {...props} />,
  li: (props: any) => <li {...props} />,
  pre: (props: any) => <pre {...props} />,
  code: (props: any) => <code className="tw-p-1 tw-font-jetbrains" {...props} />,
  inlineCode: (props: any) => <code className="tw-font-jetbrains tw-rounded" {...props} />,
  table: (props: any) => <table className="tw-border-collapse tw-w-full" {...props} />,
  thead: (props: any) => <thead className="tw-bg-stroke" {...props} />,
  tbody: (props: any) => <tbody {...props} />,
  tr: (props: any) => <tr {...props} />,
  td: (props: any) => <td className="tw-border tw-border-blue tw-p-2" {...props} />,
  th: (props: any) => <th className="tw-border tw-border-blue tw-p-2" {...props} />,
};

export type BlogProps = { article: BlogPostResult };

export default function App(props: BlogProps): JSX.Element {
  const { article } = props;

  return (
    <Page>
      <div className="tw-w-full tw-p-2">
        {article.meta.title}
        <MDXRemote compiledSource={article.source.compiledSource} components={MDX_CUSTOM_COMPONENTS} />
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
