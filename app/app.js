"use client"

import { useEffect } from 'react';
import { initGA, logPageView } from '../path-to-analytics-file/analytics';
import { useRouter } from 'next/router';

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    if (!window.GA_INITIALIZED) {
      initGA();
      window.GA_INITIALIZED = true;
    }

    const handleRouteChange = () => {
      logPageView();
    };

    router.events.on('routeChangeComplete', handleRouteChange);

    // Clean up previous event handlers on unmount
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return <Component {...pageProps} />;
}

export default MyApp;