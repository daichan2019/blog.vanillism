import './globals.css';
import './prism-vsc-dark-plus.css';
import Footer from '@/components/footer';
import Header from '@/components/header';
import cn from '@/utils/cn';

export const metadata = {
  alternates: {
    canonical: 'https://blog.vanillism.com',
  },
  description: 'vanilla.dev blog',
  openGraph: {
    description: 'vanilla.dev blog',
    locale: 'ja_JP',
    siteName: 'vanilla.dev blog',
    title: 'vanilla.dev blog',
    type: 'website',
    url: 'https://blog.vanillism.com',
  },
  title: {
    default: 'vanilla.dev blog',
    template: '%s | vanilla.dev blog',
  },
  twitter: {
    card: 'summary_large_image',
    creator: '@vanilla_dev',
    description: 'vanilla.dev blog',
    site: '@vanilla_dev',
    title: 'vanilla.dev blog',
  },
  verification: {
    google: 'サーチコンソールのやつ',
  },
};

export default function RootLayout({ children }: { children: JSX.Element }): JSX.Element {
  return (
    <html lang='ja'>
      <body>
        <div className={cn('flex min-h-screen flex-col bg-neutral-50')}>
          <Header />
          <main className={cn('mx-auto w-full max-w-6xl flex-1 overflow-x-hidden px-4 py-8')}>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
