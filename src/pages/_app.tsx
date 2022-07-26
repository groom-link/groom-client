import React from 'react';
import type { AppProps } from 'next/app';

import GlobalStyle from '../styles/Global';

function MyApp({ Component, pageProps }: AppProps) {
  return <>
    <GlobalStyle />
    <Component {...pageProps} />
  </>;
}

// global style, provider, recoil root, ...

export default MyApp;
