import { compareDesc } from 'date-fns';
import PostCard from '@/components/post-card';
import { allPosts } from 'contentlayer/generated';

export default function Page(): JSX.Element {
  const posts = allPosts.sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)));

  return (
    <div>
      {posts.map((post, idx) => (
        <PostCard key={idx} {...post} />
      ))}
    </div>
  );
}
