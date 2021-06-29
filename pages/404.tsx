import SEO from '../components/SEO'
import { Wave } from '../components/Svg'
import Nav from '../components/Nav'
import { Header, Text } from '../components/Text'
import { LayoutSection, Spacer } from '../components/Layout'
import React from 'react'
import NextLink from 'next/link'

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
      <LayoutSection backgroundColor="bg-background" footer={<Wave />}>
        <Nav
          links={[
            { href: '/about', text: 'About' },
            { href: '/blog', text: 'Blog' },
            { href: '/#contact', text: 'Contact' }
          ]}
        />

        <div className="pt-16 md:pt-32 pb-16">
          <Header element="h1">404 Not Found 🤔</Header>
          <Text size="text-3xl">It looks like you've found a dead link...</Text>
          <Spacer size="md" />
          <NextLink href="/">
            <a className="text-3xl hover:text-secondary text-primary">
              Go home
            </a>
          </NextLink>
        </div>
      </LayoutSection>
    </main>
  )
}