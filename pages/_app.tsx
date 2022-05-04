import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { NotificationsProvider } from '@mantine/notifications';
import Head from 'next/head';
import { MantineProvider } from '@mantine/core';
// import { useState } from 'react';
// import { Hydrate, QueryClient, QueryClientProvider } from 'react-query';

function MyApp({ Component, pageProps }: AppProps) {
  // const [queryClient] = useState(() => new QueryClient());

  return (
    <>
      <Head>
        <title>Micrach Admin Panel</title>
        <meta name="description" content="Micrach Admin Panel" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <MantineProvider withGlobalStyles withNormalizeCSS theme={{ colorScheme: 'light' }}>
        <NotificationsProvider position='top-right'>
          <Component {...pageProps} />
        </NotificationsProvider>
      </MantineProvider>
    </>


  // <QueryClientProvider client={queryClient}>
  //   <Hydrate state={pageProps.dehydratedState}>
  //   </Hydrate>
  // {/* </QueryClientProvider> */}
  );
}

export default MyApp;
