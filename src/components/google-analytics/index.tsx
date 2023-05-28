'use client';
import { usePathname, useSearchParams } from 'next/navigation';
import Script from 'next/script';
import { Suspense, useEffect } from 'react';
import pageview, { GA_MEASUREMENT_ID } from '@/lib/gtag';

const GoogleAnalytics = (): JSX.Element => {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (!searchParams) return;

    const url = pathname + searchParams.toString();

    pageview(url);
  }, [pathname, searchParams]);

  return (
    <>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`} strategy='afterInteractive' />
      <Script
        dangerouslySetInnerHTML={{
          __html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${GA_MEASUREMENT_ID}', {
          page_path: window.location.pathname,
        });
      `,
        }}
        id='gtag-init'
        strategy='afterInteractive'
      />
    </>
  );
};

export default function Analytics(): JSX.Element {
  return (
    <>
      {GA_MEASUREMENT_ID && (
        <Suspense>
          <GoogleAnalytics />
        </Suspense>
      )}
    </>
  );
}
