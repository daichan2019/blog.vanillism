import Link from 'next/link';

export default function Footer(): JSX.Element {
  return (
    <footer className='py-4 md:py-6'>
      <div className='flex flex-col items-center'>
        <div className='flex space-x-4'></div>
        <div className='mt-2 flex space-x-2 text-sm text-gray-500 dark:text-gray-400'>
          <p>siteMetadata.author</p>
          <div>{' | '}</div>
          <p>{`© ${new Date().getFullYear()}`}</p>
          <div>{' | '}</div>
          <Link href='/'>siteMetadata.title</Link>
        </div>
      </div>
    </footer>
  );
}
