import React, { Fragment } from 'react'
import Head from 'next/head'
import { AppProps } from 'next/app'
import '../styles/globals.css'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Fragment>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>supergrecko.dev | my tiny piece of the internet</title>
      </Head>
      <Component {...pageProps} />
    </Fragment>
  )
}
