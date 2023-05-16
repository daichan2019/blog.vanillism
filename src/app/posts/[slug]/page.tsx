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
      <div className={cn('mb-8 text-center')}>
        <time className={cn('mb-1 text-xs text-gray-600')} dateTime={post?.publishedAt}>
          {format(parseISO(post?.publishedAt || ''), 'LLLL d, yyyy')}
        </time>
        <h1>{post?.title}</h1>
      </div>
      <MDXContent className={cn('prose')} />
    </article>
  );
}
