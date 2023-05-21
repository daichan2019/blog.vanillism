import Image from 'next/image';
import cn from '@/utils/cn';

export const metadata = {
  description: 'Webフロントエンドエンジニアvanilla.devについて',
  title: 'About Me',
};

export default function Page(): JSX.Element {
  return (
    <div className={cn('flex flex-col gap-8 lg:flex-row')}>
      <Image alt='' className={cn('rounded-full')} height={240} src='/orange.jpg' width={240} />
      <div>
        <h2 className={cn('text-2xl font-bold md:text-4xl')}>vanilla.dev</h2>
        <p className={cn('mt-8')}>
          Hi, I am vanilla.dev. I am a software engineer interested in Web Front-end.
          <br />I am proficient in development using React, Next.js, and TypeScript.
        </p>
      </div>
    </div>
  );
}
