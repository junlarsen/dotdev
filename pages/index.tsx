import React from 'react'
import { Nav } from '../components/Nav'
import { Button } from '../components/Button'
import { Wave } from '../components/Svg'
import { Project, LayoutSection, Spacer } from '../components/Layout'
import { Header, Link, Text } from '../components/Text'
import { SEO } from '../components/SEO'

export default function Index() {
  return (
    <main id='top'>
      <SEO
        title='supergrecko.dev | my tiny piece of the internet'
        description='This is dotdev, my personal website.'
        image='https://supergrecko.dev/favicon.png'
        imageDescription="A picture of a cat, I like cats."
        canonical='https://supergrecko.dev/'
      />

      <LayoutSection backgroundColor='bg-background' footer={<Wave />}>
        <Nav
          links={[
            { href: '/about', text: 'About' },
            { href: '/blog', text: 'Blog' },
            { href: '#contact', text: 'Contact' }
          ]}
        />

        <div className='pt-16 md:pt-64 pb-16'>
          <Header element='h1'>Hello there! 👋</Header>
          <Text size='text-3xl'>
            My name is Mats Larsen, I'm a student living in Norway and I like to
            spend my spare time working on
            open-source software, playing video games, cooking and watching
            anime.
          </Text>
          <Spacer size="sm" />

          <div className='py-16 md:space-x-4 flex flex-col md:flex-row'>
            <Button
              className='bg-primary border text-background transition hover:bg-secondary'
              href='#projects'>
              My Work
            </Button>
            <Button
              className='border border-primary text-primary transition hover:border-secondary hover:text-secondary'
              href='#contact'
            >
              Contact Me
            </Button>
          </div>
        </div>
      </LayoutSection>

      <LayoutSection backgroundColor='bg-white'>
        <div className='pt-32'>
          <Header color='text-primary' id='projects'>
            Technology & Open Source
          </Header>
          <Text color='text-background'>
            I've worked on a lot of projects across various tech stacks, ranging
            from front-end development using React,
            to backend services running on Node and the JVM. I'm currently
            active in multiple developer communities and
            I actively contribute to a handful of open-source projects.
          </Text>

          <div className='py-16 space-y-8 pb-32'>
            <Text color='text-background'>
              These are the open-source projects I've poured the most time and
              work into.
            </Text>
          </div>
        </div>

        <div className='flex flex-col pb-16'>
          <Project name='JavaCPP' repo='https://github.com/bytedeco'>
            "The missing Java distribution of native C++ libraries", a project
            connecting the Java platform to the
            C/C++ world. Currently maintaining the LLVM and libgccjit bindings.
          </Project>
          <Project name='CompilerExplorer'
                   repo='https://github.com/compiler-explorer/compiler-explorer'>
            An application and service for running compilers interactively in
            your browser to inspect the generated
            assembly. Maintainer for the Kotlin and Java compilers on the
            website.
          </Project>
          <Project name='League Connect'
                   repo='https://github.com/supergrecko/league-connect'>
            Author of a modern NodeJS module for accessing and interacting with
            the League of Legends Client over HTTP
            and websockets.
          </Project>
        </div>
      </LayoutSection>

      <LayoutSection backgroundColor='bg-background'>
        <div className='pt-32 pb-16'>
          <Header id='contact'>Contact Me</Header>
          <Text>
            I'm currently looking for work, preferably part-time but I'm willing
            to consider other positions. Feel free
            to shoot me an email. I'll provide my resume upon request.
          </Text>
        </div>
        <div className='py-16'>
          <div className='py-8'>
            <Header id='socials'>Find me online</Header>
            <Text>
              Looking to contact me? Reach me through one of these links and
              I'll try to get back to you as soon as possible!
            </Text>
          </div>

          <ul className='list-outside'>
            <li>
              <Link color='text-primary' href='https://github.com/supergrecko'>
                GitHub &mdash; @supergrecko
              </Link>
            </li>
            <li>
              <Link color='text-primary' href='mailto:me@supergrecko.dev'>
                Email &mdash; me@supergrecko.dev
              </Link>
            </li>
          </ul>
        </div>
      </LayoutSection>
    </main>
  )
}
