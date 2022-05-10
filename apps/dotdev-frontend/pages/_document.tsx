import Document, { DocumentContext, DocumentInitialProps, Head, Html, Main, NextScript } from 'next/document';
import React from 'react';

export default class AppDocument extends Document {
  public static async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps> {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  public render(): JSX.Element {
    return (
      <Html lang="en" dir="ltr">
        <Head>
          <meta name="application-name" content="matsjla.no" />
          <meta name="msapplication-TileColor" content="#da532c" />
          <meta name="theme-color" content="#ffffff" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta name="apple-mobile-web-app-status-bar-style" content="white" />

          <link rel="author" href="https://matsjla.no" />
          <link rel="publisher" href="https://matsjla.no" />

          <link rel="apple-touch-icon" sizes="120x120" href="/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
          <link rel="manifest" href="/site.webmanifest" />
          <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />

          <meta name="twitter:dnt" content="on" />
          <meta name="pinterest" content="nopin" />
          <meta name="format-detection" content="telephone=no" />

          <noscript>
            This page uses JavaScript to function properly. If you have not already, please consider enabling it to view
            this webpage.
          </noscript>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
