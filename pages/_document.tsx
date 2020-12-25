import Document, { DocumentContext, Head, Html, Main, NextScript } from 'next/document'
import React from 'react'

export default class AppDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html lang="en" dir="ltr" itemScope itemType="https://schema.org/Article">
        <Head>
          <link rel="canonical" href="https://supergrecko.dev/" />
          <link rel="manifest" href="/site.webmanifest" />
          <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
          <link rel="author" href="/humans.txt" />
          <link rel="license" href="https://www.apache.org/licenses/LICENSE-2.0" />

          <meta name="application-name" content="supergrecko.dev" />
          <meta name="theme-color" content="#22aed1" />
          <meta name="msapplication-TileColor" content="#22aed1" />
          <meta name="description" content="welcome dear visitor! this is supergrecko.dev, my tiny piece of an unimaginably large internet.." />

          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta name="apple-mobile-web-app-status-bar-style" content="black" />

          <link rel="apple-touch-icon" sizes="120x120" href="/apple-touch-icon.png" />
          <link rel="icon" type="image/png" href="/favicon.png" />
          <link rel="icon" type="image/icon" href="/favicon.ico" />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />

          <meta property="og:url" content="https://supergrecko.dev/" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="supergrecko.dev | my tiny piece of the internet" />
          <meta property="og:image" content="https://example.com/favicon.png" />
          <meta property="og:image:alt" content="a happy, beautiful kitten" />
          <meta property="og:description" content="welcome dear visitor! this is supergrecko.dev, my tiny piece of an unimaginably large internet.." />
          <meta property="og:site_name" content="supergrecko.dev" />
          <meta property="og:locale" content="en_US" />

          <meta name="twitter:card" content="summary" />
          <meta name="twitter:site" content="@supergrecko" />
          <meta name="twitter:creator" content="@supergrecko" />
          <meta name="twitter:url" content="https://supergrecko.dev" />
          <meta name="twitter:title" content="supergrecko.dev | my tiny piece of the internet" />
          <meta name="twitter:description" content="welcome dear visitor! this is supergrecko.dev, my tiny piece of an unimaginably large internet.." />
          <meta name="twitter:image" content="https://example.com/favicon.png" />
          <meta name="twitter:image:alt" content="a happy, beautiful kitten" />

          <meta name="twitter:dnt" content="on" />

          <link rel="author" href="https://supergrecko.dev" />
          <link rel="publisher" href="https://supergrecko.dev" />
          <meta itemProp="name" content="supergrecko.dev | my tiny piece of the internet" />
          <meta itemProp="description" content="welcome dear visitor! this is supergrecko.dev, my tiny piece of an unimaginably large internet.." />
          <meta itemProp="image" content="https://example.com/favicon.png" />

          <meta name="pinterest" content="nopin" />
          <meta name="format-detection" content="telephone=no" />

          <noscript>This page uses JavaScript to function properly. If you haven't already, please consider enabling it to view my webpage.</noscript>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}