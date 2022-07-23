import React, { Fragment } from 'react';
import Head from 'next/head';
import { AppProps } from 'next/app';
import { global, reset } from '../stitches.config';
import '@fontsource/noto-sans-jp';
import '@fontsource/noto-sans';

export default function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  reset();
  global();

  return (
    <Fragment>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Component {...pageProps} />
    </Fragment>
  );
}
