import type { AppProps } from 'next/app';
import Layout from '@/components/Layout';

import '@/styles/tailwind.css';
import SearchProvider from '@/context/SearchContext';
import HistoryProvider from '@/context/HistoryContext';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SearchProvider>
      <HistoryProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </HistoryProvider>
    </SearchProvider>
  );
}
export default MyApp;
