import { defineDocumentType, makeSource } from 'contentlayer/source-files';
import { rehypeAccessibleEmojis } from 'rehype-accessible-emojis';
import rehypeAutolinkHeadings, { Options as RehypeAutolinkHeadingsOptions } from 'rehype-autolink-headings';
import rehypeCodeTitles from 'rehype-code-titles';
import rehypeExternalLinks from 'rehype-external-links';
import rehypePrettyCode, { Options as RehypePrettyCodeOptions } from 'rehype-pretty-code';
import rehypeSlug from 'rehype-slug';
import remarkGfm from 'remark-gfm';

const Post = defineDocumentType(() => ({
  computedFields: {
    url: {
      resolve: (doc) => `/posts/${doc._raw.flattenedPath}`,
      type: 'string',
    },
  },
  contentType: 'mdx',
  fields: {
    publishedAt: {
      description: 'publishedAt',
      required: true,
      type: 'date',
    },
    slug: {
      description: 'slug',
      required: true,
      type: 'string',
    },
    tags: {
      description: 'tag',
      of: {
        type: 'string',
      },
      required: true,
      type: 'list',
    },
    title: {
      description: 'title',
      required: true,
      type: 'string',
    },
  },
  filePathPattern: '**/*.mdx',
  name: 'Post',
}));

export const rehypePrettyCodeOptions: Partial<RehypePrettyCodeOptions> = {
  keepBackground: true,
  theme: 'dark-plus',
};

export default makeSource({
  contentDirPath: 'posts',
  documentTypes: [Post],
  mdx: {
    rehypePlugins: [
      rehypeSlug,
      rehypeCodeTitles,
      [rehypePrettyCode, rehypePrettyCodeOptions],
      rehypeAccessibleEmojis,
      rehypeExternalLinks,
      (option: RehypeAutolinkHeadingsOptions) =>
        rehypeAutolinkHeadings({
          ...option,
          behavior: 'wrap',
          properties: {
            className: 'font-bold',
          },
        }),
    ],
    remarkPlugins: [remarkGfm],
  },
});
