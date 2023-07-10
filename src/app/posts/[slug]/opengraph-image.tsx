import { ImageResponse } from 'next/server';
import { allPosts } from 'contentlayer/generated';

export const runtime = 'edge';

export const alt = 'vanilla.dev blog';

export const size = {
  height: 630,
  width: 1200,
};

export const contentType = 'image/png';

type Params = {
  params: { slug: string };
};

export default function Image({ params }: Params): ImageResponse {
  const post = allPosts.find((post) => post._raw.flattenedPath === params.slug);

  return new ImageResponse(
    (
      <div
        style={{
          alignItems: 'center',
          background: 'white',
          display: 'flex',
          fontSize: 48,
          height: '100%',
          justifyContent: 'center',
          width: '100%',
        }}
      >
        {post.title}
      </div>
    ),
    {
      ...size,
    },
  );
}
