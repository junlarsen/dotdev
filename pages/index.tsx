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

      <LayoutSection backgroundColor="bg-background" footer={<Wave />}>
        <Nav
          links={[
            { href: '#about', text: 'About' },
            { href: '/blog', text: 'Blog' },
            { href: '#contact', text: 'Contact' }
          ]}
        />

        <div className="pt-16 md:pt-64 pb-16">
          <Header element="h1">Hello there! 👋</Header>
          <Text size="text-3xl">
            My name is Mats Larsen and I'm a high school student based in Norway. I like to spend my spare time working
            on open-source software, playing video games and cooking.
          </Text>

          <div className="py-16 md:space-x-4 flex flex-col md:flex-row">
            <Button className="bg-primary border text-background transition hover:bg-secondary" href="#projects">
              View Projects
            </Button>
            <Button
              className="border border-primary text-primary transition hover:border-secondary hover:text-secondary"
              href="#contact"
            >
              Contact Me
            </Button>
          </div>
        </div>
      </LayoutSection>

      <LayoutSection backgroundColor="bg-white">
        <Header color="text-primary" id="about">
          About Me
        </Header>
        <Text color="text-background">
          I'm a third-year high school student in Norway. I started programming during my spare time 4 years ago and my
          passion for software and open-source has grown ever since.
        </Text>
      </LayoutSection>

      <LayoutSection backgroundColor="bg-white">
        <div className="pt-32">
          <Header color="text-primary" id="projects">
            Projects, Tech & Open Source
          </Header>
          <Text color="text-background">
            I work on a lot of projects across different tech stacks, ranging from front-end work using
            Next.js/TypeScript to backend services and the JVM for backend and other applications. Docker,
            containerization, deployment and management of cloud infrastructure is also a field I'm researching and
            experimenting, in hopes of building fully automatic CI/CD pipelines.
          </Text>

          <div className="py-16 space-y-8 pb-32">
            <Text color="text-background">
              Here are the projects I've poured the most time and work into. It would be greatly appreciated if you took
              the time to check them out.
            </Text>
          </div>
        </div>

        <div className="flex flex-col pb-16">
          <Project name="League Connect" repo="https://github.com/supergrecko/league-connect">
            An up-to-date modern NodeJS module for accessing and interacting with the League of Legends Client over HTTP
            and websockets.
          </Project>
          <Project name="LLVM4J" repo="https://github.com/llvm4j/llvm4j">
            Extensive and idiomatic Kotlin & Java bindings to LLVMs C API through Java Native Interface.
          </Project>
          <Project name="JavaCPP" repo="https://github.com/bytedeco/">
            A solution for generating Java JNI code from C/C++ header files, providing Java bindings to 50+ C/C++
            libraries. (In collaboration with Samuel Audet & friends)
          </Project>
        </div>
      </LayoutSection>

      <LayoutSection backgroundColor="bg-background">
        <div className="pt-32 pb-16">
          <Header id="contact">Contact Me</Header>
          <Text>
            I'm open to new opportunities and adventures. Have an offer I'd be interested in? Feel free to shoot me
            an email. I'm able to provide a resume (english or norwegian) upon request.
          </Text>
        </div>
        <div className="py-16">
          <div className="py-8">
            <Header id="socials">Find me online</Header>
            <Text>
              Looking to contact me? Reach me through one of these links and I'll try to get back to you as soon as possible!
            </Text>
          </div>

          <ul className="list-outside">
            <li>
              <Link color="text-primary" href="https://github.com/supergrecko">
                GitHub &mdash; @supergrecko
              </Link>
            </li>
            <li>
              <Link color="text-primary" href="https://twitter.com/supergrecko">
                Twitter &mdash; @supergrecko
              </Link>
            </li>
            <li>
              <Link color="text-primary" href="mailto:me@supergrecko.dev">
                Email &mdash; me@supergrecko.dev
              </Link>
            </li>
          </ul>
        </div>
      </LayoutSection>
    </main>
  )
}
