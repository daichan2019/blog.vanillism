import { compareDesc } from 'date-fns';
import PostCard from '@/components/post-card';
import { Post, allPosts } from 'contentlayer/generated';

export default function Page(): JSX.Element {
  const posts = allPosts.sort((a: Post, b: Post) => compareDesc(new Date(a.publishedAt), new Date(b.publishedAt)));

  return (
    <div>
      {posts.map((post, idx) => (
        <PostCard key={idx} {...post} />
      ))}
    </div>
  );
}
