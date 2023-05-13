import { defineDocumentType, makeSource } from 'contentlayer/source-files';
import rehypeAccessibleEmojis from 'rehype-accessible-emojis';
import rehypeAutolinkHeadings, { Options as RehypeAutolinkHeadingsOptions } from 'rehype-autolink-headings';
import rehypeCodeTitles from 'rehype-code-titles';
import rehypeExternalLinks, { Options as RehypeExternalLinksOptions } from 'rehype-external-links';
import rehypePrism from 'rehype-prism-plus';
import rehypeShiftHeading from 'rehype-shift-heading';
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

export default makeSource({
  contentDirPath: 'posts',
  documentTypes: [Post],
  mdx: {
    rehypePlugins: [
      rehypeSlug,
      rehypeCodeTitles,
      rehypePrism,
      rehypeAccessibleEmojis,
      () =>
        rehypeShiftHeading({
          shift: 1,
        }),
      (option: RehypeAutolinkHeadingsOptions) =>
        rehypeAutolinkHeadings({
          ...option,
          behavior: 'wrap',
        }),
      (option: RehypeExternalLinksOptions) =>
        rehypeExternalLinks({
          ...option,
          target: '_blank',
        }),
    ],
    remarkPlugins: [remarkGfm],
  },
});
