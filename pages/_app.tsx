import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { NotificationsProvider } from '@mantine/notifications';
// import { useState } from 'react';
// import { Hydrate, QueryClient, QueryClientProvider } from 'react-query';

function MyApp({ Component, pageProps }: AppProps) {
  // const [queryClient] = useState(() => new QueryClient());

  return (
    <NotificationsProvider position='top-right'>
      <Component {...pageProps} />
    </NotificationsProvider>


  // <QueryClientProvider client={queryClient}>
  //   <Hydrate state={pageProps.dehydratedState}>
  //   </Hydrate>
  // {/* </QueryClientProvider> */}
  );
}

export default MyApp;
