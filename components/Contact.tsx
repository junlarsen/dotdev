import React from 'react'
import { Header, Link, Text } from './Text'
import { LayoutSection } from './Layout'

export default function Contact(): JSX.Element {
  return (
    <LayoutSection backgroundColor="bg-secondary">
      <div className="pt-32 pb-16">
        <Header id="contact" color="text-white">Contact Me</Header>
        <Text>I'm still a high school student and while I do have plans for the future I am always open to new opportunities. Have something you think I'd be interested in? Shoot me an email! Willing to provide resume (english or norwegian) upon request.</Text>
      </div>
      <div className="py-16">
        <div className="py-8">
          <Header id="socials" color="text-white">Find me online</Header>
          <Text>Need to contact me for any or no reason? Reach me through one of these links. I'll try to get back to you ASAP!</Text>
        </div>

        <ul className="list-outside">
          <li><Link color="text-primary" href="https://github.com/supergrecko">GitHub &mdash; @supergrecko</Link></li>
          <li><Link color="text-primary" href="https://twitter.com/supergrecko">Twitter &mdash; @supergrecko</Link></li>
          <li><Link color="text-primary" href="mailto:me@supergrecko.com">Email &mdash; me@supergrecko.com</Link></li>
        </ul>
      </div>
    </LayoutSection>
  )
}