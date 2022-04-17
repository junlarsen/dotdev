import React, { Fragment, useEffect, useState } from 'react';
import Head from 'next/head';
import { AppProps } from 'next/app';
import { ColorTheme } from '../components/usePreferredTheme';
import { AppContext, AppContextState } from '../components/AppContext';
import '../components/index.css';
import '@fontsource/nunito';
import '@fontsource/material-icons';

export default function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  const defaultTheme: ColorTheme = 'light';
  const [theme, setTheme] = useState(defaultTheme);
  const state: AppContextState = {
    setTheme,
    theme,
  };

  useEffect(() => {
    const html = document.getElementsByTagName('html')[0];
    if (theme === 'dark') {
      html.classList.remove('tw-bg-background');
      html.classList.add('tw-bg-secondary', 'tw-dark');
    } else {
      html.classList.add('tw-bg-background');
      html.classList.remove('tw-bg-secondary', 'tw-dark');
    }
  }, [theme]);

  return (
    <Fragment>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <AppContext.Provider value={state}>
        <Component {...pageProps} />
      </AppContext.Provider>
    </Fragment>
  );
}
