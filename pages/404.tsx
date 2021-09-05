import React from 'react'
import NextLink from 'next/link'
import { SEO } from '../components/seo'
import { Wave } from '../components/vectors'
import { Navigation } from '../components/navigation'
import { Header, Text } from '../components/text'
import { Section, Spacer } from '../components/layout'

export default function Error() {
  return (
    <main>
      <SEO
        title="supergrecko.dev | 404 not found"
        description="unable to find this page."
        image="https://supergrecko.dev/favicon.png"
        imageDescription="A picture of a cat, I like cats."
        canonical="https://supergrecko.dev/404"
      />
      <Section backgroundColor="bg-background" footer={<Wave />}>
        <Navigation
          links={[
            { href: '/blog', text: 'Blog' },
            { href: '/#contact', text: 'Contact' }
          ]}
        />

        <div className="pt-16 md:pt-32 pb-16">
          <Header element="h1">404 Not Found 🤔</Header>
          <Text size="text-3xl">It looks like you've found a dead link...</Text>
          <Spacer size="md" />
          <NextLink href="/">
            <a className="text-3xl hover:text-secondary text-primary">Go home</a>
          </NextLink>
        </div>
      </Section>
    </main>
  )
}
