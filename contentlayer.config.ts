import { defineDocumentType, makeSource } from 'contentlayer/source-files';

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
});
