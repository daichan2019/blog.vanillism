import Image from 'next/image';
import Link from 'next/link';

const navigation = [
  { name: 'Articles', path: '/articles' },
  { name: 'Tags', path: '/tags' },
  { name: 'Me', path: '/me' },
];

export default function Header(): JSX.Element {
  return (
    <header className='w-full'>
      <div className='mx-auto flex max-w-3xl items-center justify-between px-4 py-6 sm:px-6 xl:max-w-5xl xl:px-0'>
        <h1 className='text-xl font-bold md:text-2xl'>
          <Link className='flex items-center gap-2' href='/'>
            <Image alt='' className='rounded-full' height={32} src='/img/orange.jpg' width={32} />
            <span>blog.vanillism</span>
          </Link>
        </h1>
        <nav className='hidden sm:block'>
          <ul className='flex gap-6'>
            {navigation.map((item) => {
              return (
                <li key={item.name}>
                  <Link className='font-bold transition-colors hover:text-orange-500' href={item.path}>
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
