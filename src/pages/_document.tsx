import { Head, Html, Main, NextScript } from 'next/document';
import Script from 'next/script';

export default function Document() {
  return (
    <Html>
      <link
        rel="preload"
        href="/fonts/PretendardVariable.woff2"
        as="font"
        crossOrigin=""
      />
      <Head>
        <Script
          src="https://developers.kakao.com/sdk/js/kakao.js"
          strategy="beforeInteractive"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

// index.html
// meta, font import, favicon, google 애널리틱스, ....
