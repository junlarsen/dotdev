import React, { Fragment } from 'react';
import Head from 'next/head';
import { AppProps } from 'next/app';
import '../components/index.css';
import '../components/gruvbox-dark.css';
import '@fontsource/jetbrains-mono';
import '@fontsource/material-icons';
import '@fontsource/noto-sans-jp';
import '@fontsource/noto-sans';

export default function MyApp({ Component, pageProps }: AppProps): JSX.Element {
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
