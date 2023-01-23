import '../styles/globals.css';
import type { AppProps } from 'next/app';
import PageLayout from '../components/layout/PageLayout';
import usePageFallback from '../lib/hooks/usePageFallback';
import PageLoading from '../components/ui/PageLoading';

function MyApp({ Component, pageProps }: AppProps) {
  const { loading } = usePageFallback();
  return (
    <PageLayout>
      {loading ? <PageLoading /> : <Component {...pageProps} />}
    </PageLayout>
  );
}

export default MyApp;
