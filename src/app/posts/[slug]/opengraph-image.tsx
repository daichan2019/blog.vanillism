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
            height: '100%',
            padding: '30px',
            width: '100%',
          }}
        >
          <div
            style={{
              alignItems: 'center',
              background: '#fff',
              display: 'flex',
              justifyContent: 'center',
              padding: '0 20px',
              position: 'relative',
            }}
          >
            <span style={{ fontSize: 64, fontWeight: 'bold' }}>{post.title}</span>
            <div
              style={{
                alignItems: 'center',
                bottom: '20px',
                display: 'flex',
                gap: '20px',
                position: 'absolute',
                right: '20px',
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                alt=''
                src={`${process.env.NEXT_PUBLIC_URL || ''}/orange.jpg`}
                style={{ borderRadius: '50%', height: '84px', width: '84px' }}
              />
              <span style={{ fontSize: 48, fontWeight: 'bold' }}>vanilla.dev</span>
            </div>
          </div>
        </div>
      ),
    );
  } else {
    return new Response('Not Found', { status: 404 });
  }
}
