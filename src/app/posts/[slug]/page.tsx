import { format, parseISO } from 'date-fns';
import { Metadata } from 'next';
import { useMDXComponent } from 'next-contentlayer/hooks';
import cn from '@/utils/cn';
import { allPosts } from 'contentlayer/generated';

export type PageProps = {
  params: {
    slug: string;
  };
};

export function generateStaticParams(): { slug: string }[] {
  return allPosts.map((post) => ({ slug: post._raw.flattenedPath }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const post = allPosts.find((post) => post._raw.flattenedPath === params.slug);

  return { title: post?.title };
}

export default function Page({ params }: PageProps): JSX.Element | null {
  const post = allPosts.find((post) => post._raw.flattenedPath === params.slug);
  const MDXContent = useMDXComponent(post?.body.code || '');

  return (
    <article>
      <time className={cn('text-xs text-gray-600')} dateTime={post?.publishedAt}>
        {format(parseISO(post?.publishedAt || ''), 'yyyy-MM-dd')}
      </time>
      <h1 className={cn('mt-3 text-3xl font-bold xl:text-4xl')}>{post?.title}</h1>
      <div
        className={cn(
          'prose mt-16 w-full max-w-full prose-h2:border-b prose-h2:border-orange-500 prose-h2:pb-2 prose-a:no-underline',
        )}
      >
        <MDXContent />
      </div>
    </article>
  );
}
