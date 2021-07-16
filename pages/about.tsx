import React from 'react'
import { SEO } from '../components/SEO'
import { Nav } from '../components/Nav'
import { LayoutSection } from '../components/Layout'
import { Header, Text } from '../components/Text'

export default function About() {
  return (
    <main>
      <SEO
        title="supergrecko.dev | about me"
        description="this page contains a bit of information about myself"
        image="https://supergrecko.dev/favicon.png"
        imageDescription="A picture of a cat, I like cats."
        canonical="https://supergrecko.com/about"
      />
      <LayoutSection backgroundColor="bg-background">
        <Nav
          links={[
            { href: '/about', text: 'About' },
            { href: '/blog', text: 'Blog' },
            { href: '/#contact', text: 'Contact' }
          ]}
        />

        <div className="pt-16 md:pt-32 pb-16">
          <Header element="h1">Under construction.</Header>
          <Text size="text-3xl">This page is currently under construction. Apologies for the inconvenience.</Text>
        </div>
      </LayoutSection>
    </main>
  )
}
