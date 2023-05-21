import { compareDesc } from 'date-fns';
import PostCard from '@/components/post-card';
import cn from '@/utils/cn';
import { Post, allPosts } from 'contentlayer/generated';

export const metadata = {
  title: 'vanilla.dev blog',
};

export default function Page(): JSX.Element {
  const posts = allPosts.sort((a: Post, b: Post) => compareDesc(new Date(a.publishedAt), new Date(b.publishedAt)));

  return (
    <div className={cn('divide-y divide-gray-200')}>
      {posts.map((post, idx) => (
        <PostCard key={idx} {...post} />
      ))}
    </div>
  );
}
