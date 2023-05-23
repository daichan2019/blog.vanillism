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

  if (post) {
    return new ImageResponse(
      (
        <div
          style={{
            background: '#fb923c',
            display: 'flex',
            fontSize: 64,
            height: '100%',
            padding: '20px',
            width: '100%',
          }}
        >
          <div
            style={{
              alignItems: 'center',
              background: '#fff',
              borderRadius: '16px',
              display: 'flex',
              justifyContent: 'center',
              padding: '0 20px',
              position: 'relative',
            }}
          >
            <span>{post.title}</span>
            <span
              style={{
                bottom: '32px',
                fontSize: 48,
                position: 'absolute',
                right: '40px',
              }}
            >
              vanilla.dev
            </span>
          </div>
        </div>
      ),
    );
  } else {
    return new Response('Not Found', { status: 404 });
  }
}
