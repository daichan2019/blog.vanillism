import Link from 'next/link';
import { AiFillGithub, AiFillTwitterCircle } from 'react-icons/ai';
import { SiZenn } from 'react-icons/si';

export default function Footer(): JSX.Element {
  return (
    <footer className='py-4 md:py-6'>
      <div className='flex flex-col items-center'>
        <div className='flex space-x-4'>
          <a href='https://github.com/daichan2019' target='_blank'>
            <AiFillGithub size={32} />
          </a>
          <a href='https://twitter.com/vanilla_dev/' target='_blank'>
            <AiFillTwitterCircle color='#1DA1F2' size={32} />
          </a>
          <a href='https://zenn.dev/daichi_dev' target='_blank'>
            <SiZenn color='#3EA8FF' size={32} />
          </a>
        </div>
        <div className='mt-2 flex space-x-2 text-sm text-gray-600'>
          <p>vanilla.dev</p>
          <div>{' | '}</div>
          <p>{`© ${new Date().getFullYear()}`}</p>
          <div>{' | '}</div>
          <Link href='/'>blog.vanillism</Link>
        </div>
      </div>
    </footer>
  );
}
