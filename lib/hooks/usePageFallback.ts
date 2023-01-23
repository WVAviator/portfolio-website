import { useRouter } from 'next/router';
import React from 'react';

const usePageFallback = () => {
  const router = useRouter();
  const [loading, setLoading] = React.useState<boolean>(false);

  React.useEffect(() => {
    const changeStart = () => setLoading(true);
    const changeComplete = () => setLoading(false);

    router.events.on('routeChangeStart', changeStart);
    router.events.on('routeChangeComplete', changeComplete);
    router.events.on('routeChangeError', changeComplete);

    return () => {
      router.events.off('routeChangeStart', changeStart);
      router.events.off('routeChangeComplete', changeComplete);
      router.events.off('routeChangeError', changeComplete);
    };
  }, [router.events]);

  return { loading };
};

export default usePageFallback;
