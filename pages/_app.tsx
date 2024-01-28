import '../styles/globals.css';
import type { AppProps } from 'next/app';
import PageLayout from '../components/layout/PageLayout';
import usePageFallback from '../lib/hooks/usePageFallback';
import PageLoading from '../components/ui/PageLoading';
import ColorSchemeProvider from '../lib/context/ColorSchemeProvider';

function MyApp({ Component, pageProps }: AppProps) {
  const { loading } = usePageFallback();
  return (
    <ColorSchemeProvider>
      <PageLayout>
        {loading ? <PageLoading /> : <Component {...pageProps} />}
      </PageLayout>
    </ColorSchemeProvider>
  );
}

export default MyApp;
