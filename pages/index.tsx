import React from 'react'
import Nav from '../components/Nav'
import Button from '../components/Button'
import { Wave } from '../components/Svg'
import { Project, LayoutSection } from '../components/Layout'
import { Header, Link, Text } from '../components/Text'
import SEO from '../components/SEO'

export default function Index() {
  return (
    <main id="top">
      <SEO
        title="supergrecko.dev | my tiny piece of the internet"
        description="This is supergrecko.dev, a site I built for myself, containg my portfolio and a blog."
        image="https://supergrecko.dev/favicon.png"
        imageDescription="A picture of a kitten"
        canonical="https://supergrecko.dev/"
      />

      <LayoutSection backgroundColor="bg-secondary" footer={(<Wave />)}>
        <Nav links={[
          { href: '#about', text: 'About' },
          { href: '#projects', text: 'Projects' },
          { href: '#contact', text: 'Contact' }
        ]} />

        <div className="pt-16 md:pt-64 pb-16">
          <Header element="h1">Hello there! 👋</Header>
          <Text>My name is Mats Larsen, and I'm a high school student based in Norway. I like to spend my spare time working on open-source software, playing video games and cooking.</Text>

          <div className="py-16 md:space-x-4 flex flex-col md:flex-row">
            <Button className="bg-primary text-secondary" href="#projects">View Projects</Button>
            <Button className="border border-white text-white" href="#contact">Contact Me</Button>
          </div>
        </div>
      </LayoutSection>

      <LayoutSection backgroundColor="bg-white">
        <Header color="text-secondary" id="about">About Me</Header>
        <Text color="text-secondary">I'm a third-year high school student in Norway looking to pursue a Computer Science degree after I graduate high school. I started programming during my spare time 4 years ago and my passion for software and open-source has grown ever since.</Text>
      </LayoutSection>

      <LayoutSection backgroundColor="bg-white">
        <div className="pt-32">
          <Header color="text-secondary" id="projects">Projects & Tech</Header>
          <Text color="text-secondary">I've worked on a lot of different projects using various tech stacks. My favorite stacks include Scala/Kotlin on the JVM, TypeScript + React for the web and Kotlin on the backend. Deploying Docker containers and managing cloud infrastructure on AWS is also on the list.</Text>

          <div className="py-16 space-y-8 pb-32">
            <Text color="text-secondary">These are some of the projects I've invested a lot of time into. It'd be awesome if you took the time to check some of them out!</Text>
          </div>
        </div>

        <div className="flex flex-col pb-16">
          <Project name="League Connect" repo="https://github.com/supergrecko/league-connect">Node Module for using the League of Legends Client APIs with a focus on ES6 Promises.</Project>
          <Project name="BitBuilder" repo="https://github.com/vexelabs/bitbuilder">A comprehensive wrapper around LLVM's C API for Kotlin & the JVM.</Project>
          <Project name="JavaCPP" repo="https://github.com/bytedeco/javacpp-presets">The missing Java distribution of native C++ libraries. (Owned and maintained by Samuel Audet)</Project>
        </div>
      </LayoutSection>

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
    </main>
  )
}