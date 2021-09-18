import type { AppProps } from 'next/app';
import Layout from '@/components/Layout';

import '@/styles/tailwind.css';
import SearchProvider from '@/context/SearchContext';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SearchProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SearchProvider>
  );
}
export default MyApp;
