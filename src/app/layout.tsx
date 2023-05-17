import './globals.css';
import './prism-vsc-dark-plus.css';
import Footer from '@/components/footer';
import Header from '@/components/header';
import cn from '@/utils/cn';

export const metadata = {
  description: 'Webフロントエンドエンジニアvanilla.devのTech Blog',
  title: 'vanilla.dev blog',
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
