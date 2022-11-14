import React, { useEffect } from 'react';
import type { AppProps } from 'next/app';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from 'react-hot-toast';

import GlobalStyle from '../styles/Global';

export const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  });

  return (
    <QueryClientProvider client={queryClient}>
      <GlobalStyle />
      <Component {...pageProps} />
      {/* <ReactQueryDevtools initialIsOpen={false} /> */}
      <Toaster position="bottom-center" />
    </QueryClientProvider>
  );
}

// global style, provider, recoil root, ...

export default MyApp;
