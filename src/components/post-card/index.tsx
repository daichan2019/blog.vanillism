import { format, parseISO } from 'date-fns';
import Link from 'next/link';
import cn from '@/utils/cn';
import { Post } from 'contentlayer/generated';

export default function PostCard(post: Post): JSX.Element {
  return (
    <div className={cn('py-8 xl:py-12')}>
      <h2 className={cn('text-xl')}>
        <Link className={cn('line-clamp-3 font-bold transition-colors hover:text-orange-500')} href={post.url}>
          {post.title}
        </Link>
      </h2>
      <time className={cn('mt-2 block text-xs text-gray-600')} dateTime={post.publishedAt}>
        {format(parseISO(post.publishedAt), 'yyyy-MM-dd')}
      </time>
    </div>
  );
}
