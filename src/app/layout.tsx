import './globals.css';
import Header from '@/components/header';
import cn from '@/utils/cn';

export const metadata = {
  description: 'Webフロントエンドエンジニアvanilla.devのTech Blog',
  title: 'blog.vanillism',
};

export default function RootLayout({ children }: { children: JSX.Element }): JSX.Element {
  return (
    <html lang='ja'>
      <body>
        <div className={cn('flex min-h-screen flex-col bg-neutral-50')}>
          <Header />
          <main className={cn('flex-1 overflow-x-hidden')}>{children}</main>
        </div>
      </body>
    </html>
  );
}
