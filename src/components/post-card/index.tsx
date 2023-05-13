import { format, parseISO } from 'date-fns';
import Link from 'next/link';
import cn from '@/utils/cn';
import { Post } from 'contentlayer/generated';

export default function PostCard(post: Post): JSX.Element {
  return (
    <div className={cn('mb-8 xl:mb-12')}>
      <h2 className='text-xl'>
        <Link className={cn('font-bold transition-colors hover:text-orange-500')} href={post.url}>
          {post.title}
        </Link>
      </h2>
      <time className='mb-2 block text-xs text-gray-600' dateTime={post.publishedAt}>
        {format(parseISO(post.publishedAt), 'yyyy-MM-dd')}
      </time>
      <p className={cn('line-clamp-2')}>{post.body.raw}</p>
    </div>
  );
}
