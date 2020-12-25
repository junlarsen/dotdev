import React from 'react'
import Nav from '../components/Nav'
import HomeButton from '../components/Button'
import { Wave } from '../components/Svg'
import { Project, LayoutSection } from '../components/Layout'
import { Header, Link, Text } from '../components/Text'

export default function Index() {
  return (
    <main id="top">
      <LayoutSection
        backgroundColor="bg-secondary"
        footer={<Wave />}
      >
        <Nav links={[
          { href: '#about', text: 'About' },
          { href: '#projects', text: 'Projects' },
          { href: '#contact', text: 'Contact' }
        ]} />

        <div className="pt-16 md:pt-64 pb-16">
          <Header element="h1">Lorem Ipsum Dolor Sit</Header>
          <Text>Vestibulum vestibulum molestie ligula sit amet egestas. Sed
            tortor elit, mollis sed risus sit amet, bibendum eleifend turpis.
            Praesent sagittis mollis facilisis. Aliquam erat volutpat. Phasellus
            congue
          </Text>

          <div className="py-16 md:space-x-4 flex flex-col md:flex-row">
            <HomeButton className="bg-primary text-secondary" onClick={() => void 0}>View Projects</HomeButton>
            <HomeButton className="border border-white text-white" onClick={() => void 0}>Contact Me</HomeButton>
          </div>
        </div>
      </LayoutSection>

      <LayoutSection backgroundColor="bg-white">
        <Header color="text-black" id="about">About Me</Header>
        <Text color="text-black">Vestibulum vestibulum molestie ligula sit amet egestas. Sed tortor
          elit, mollis sed risus sit amet, bibendum eleifend turpis. Praesent
          sagittis mollis facilisis. Aliquam erat volutpat. Phasellus
          congue
        </Text>

        <div className="py-16 space-y-8 pb-16 md:pb-64">
          <Text color="text-black">Vestibulum vestibulum molestie ligula sit amet egestas. Sed tortor elit</Text>
          <HomeButton className="bg-primary text-secondary" onClick={() => void 0}>Visit my GitHub</HomeButton>
        </div>
      </LayoutSection>

      <LayoutSection backgroundColor="bg-white">
        <div className="pt-32">
          <Header color="text-secondary" id="projects">Project Showcase</Header>
          <Text color="text-secondary">Vestibulum vestibulum molestie ligula sit amet egestas. Sed
            tortor elit, mollis sed risus sit amet, bibendum eleifend turpis.
            Praesent sagittis mollis facilisis. Aliquam erat volutpat. Phasellus
            congue
          </Text>

          <div className="py-16 space-y-8 pb-32">
            <Text color="text-black">Vestibulum vestibulum molestie ligula sit amet egestas. Sed tortor elit</Text>
          </div>
        </div>

        <div className="flex flex-col pb-16">
          <Project name="League Connect" repo="https://github.com/supergrecko/league-connect">A project</Project>
          <Project name="League Connect" repo="https://github.com/supergrecko/league-connect">A project</Project>
          <Project name="League Connect" repo="https://github.com/supergrecko/league-connect">A project</Project>
        </div>
      </LayoutSection>

      <LayoutSection backgroundColor="bg-secondary">
        <div className="pt-32 pb-16">
          <Header id="contact" color="text-white">Contact Me</Header>
          <Text>Vestibulum vestibulum molestie ligula sit amet egestas. Sed
            tortor elit, mollis sed risus sit amet, bibendum eleifend turpis.
            Praesent sagittis mollis facilisis. Aliquam erat volutpat. Phasellus
            congue
          </Text>
        </div>
        <div className="py-16">
          <div className="py-8">
            <Header id="socials" color="text-white">Find me online</Header>
            <Text>Vestibulum vestibulum molestie ligula sit amet egestas. Sed
              tortor elit
            </Text>
          </div>

          <ul className="list-outside">
            <li><Link href="https://github.com/supergrecko">GitHub &mdash; @supergrecko</Link></li>
            <li><Link href="https://twitter.com/supergrecko">Twitter &mdash; @supergrecko</Link></li>
            <li><Link href="mailto:me@supergrecko.com">Email &mdash; me@supergrecko.com</Link></li>
          </ul>
        </div>
      </LayoutSection>
    </main>
  )
}