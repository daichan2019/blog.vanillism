import Image from 'next/image';
import Link from 'next/link';
import cn from '@/utils/cn';

const navigation = [{ name: 'About Me', path: '/me' }];

export default function Header(): JSX.Element {
  return (
    <header>
      <div className={cn('mx-auto flex max-w-6xl items-center justify-between px-4 py-6 sm:px-6 xl:px-0')}>
        <h1 className={cn('text-2xl font-bold md:text-2xl')}>
          <Link className={cn('flex items-center gap-2')} href='/'>
            <Image alt='' className={cn('rounded-full')} height={32} src='/orange.jpg' width={32} />
            <span>blog.vanillism</span>
          </Link>
        </h1>
        <nav>
          <ul className={cn('flex gap-3 xl:gap-6')}>
            {navigation.map((item) => {
              return (
                <li key={item.name}>
                  <Link className={cn('font-bold transition-colors hover:text-orange-500')} href={item.path}>
                    {item.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
}
