import { format, parseISO } from 'date-fns';
import Link from 'next/link';
import { getMDXComponent } from 'next-contentlayer/hooks';
import { Post } from 'contentlayer/generated';

export default function PostCard(post: Post): JSX.Element {
  const Content = getMDXComponent(post.body.code);

  return (
    <div className='mb-8'>
      <h2 className='text-xl'>
        <Link className='text-blue-700 hover:text-blue-900' href={post.url} legacyBehavior={true}>
          {post.title}
        </Link>
      </h2>
      <time className='mb-2 block text-xs text-gray-600' dateTime={post.date}>
        {format(parseISO(post.date), 'LLLL d, yyyy')}
      </time>
      <div className='text-sm'>
        <Content />
      </div>
    </div>
  );
}
