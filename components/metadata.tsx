import React from 'react'
import Head from 'next/head'

export function SiteMetadata({
  title,
  description,
  canonical,
  imageUrl,
  imageAlt
}: {
  title: string
  description: string
  canonical: string
  imageUrl: string
  imageAlt: string
}) {
  return (
    <Head>
      <title>{title}</title>
      <meta key="description" name="description" content={description} />

      <meta key="og:description" property="og:description" content={description} />
      <meta key="org:url" property="og:url" content={canonical} />
      <meta key="og:title" property="og:title" content={title} />
      <meta key="og:image" property="og:image" content={imageUrl} />
      <meta key="og:image:alt" property="og:image:alt" content={imageAlt} />

      <meta key="og:site_name" property="og:site_name" content="supergrecko.dev" />
      <meta key="og:locale" property="og:locale" content="en_US" />
      <meta key="og:type" property="og:type" content="website" />

      <meta key="twitter:description" name="twitter:description" content={description} />
      <meta key="twitter:url" name="twitter:url" content={canonical} />
      <meta key="twitter:title" name="twitter:title" content={title} />
      <meta key="twitter:image" name="twitter:image" content={imageUrl} />
      <meta key="twitter:image:alt" name="twitter:image:alt" content={imageAlt} />

      <meta key="twitter:card" name="twitter:card" content="summary" />
      <meta key="twitter:site" name="twitter:site" content="@supergrecko" />
      <meta key="twitter:creator" name="twitter:creator" content="@supergrecko" />

      <meta key="schema:description" itemProp="name" content={description} />
      <meta key="schema:name" itemProp="name" content={title} />
      <meta key="schema:image" itemProp="image" content={imageUrl} />
    </Head>
  )
}
