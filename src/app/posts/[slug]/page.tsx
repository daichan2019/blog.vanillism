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
          'prose mt-16 max-w-none prose-h2:border-b prose-h2:border-orange-500 prose-h2:pb-2 [&:not(.code-highlight)]:prose-code:rounded-sm [&:not(.code-highlight)]:prose-code:bg-zinc-200 [&:not(.code-highlight)]:prose-code:px-1 [&:not(.code-highlight)]:prose-code:py-0.5 [&:not(.code-highlight)]:prose-code:font-normal [&:not(.code-highlight)]:prose-code:before:content-none [&:not(.code-highlight)]:prose-code:after:content-none',
        )}
      >
        <MDXContent />
      </div>
    </article>
  );
}
