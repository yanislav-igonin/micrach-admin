import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { Notification } from '@mantine/core';
// import { useState } from 'react';
// import { Hydrate, QueryClient, QueryClientProvider } from 'react-query';

function MyApp({ Component, pageProps }: AppProps) {
  // const [queryClient] = useState(() => new QueryClient());

  return (
    <>
      <Component {...pageProps} />
    </>
    // <QueryClientProvider client={queryClient}>
    //   <Hydrate state={pageProps.dehydratedState}>
    //   </Hydrate>
    // {/* </QueryClientProvider> */}
  );
}

export default MyApp;
