import React, { PropsWithChildren } from 'react'
import { useRouter } from 'next/router'
import { Box, Container } from '../flex'
import { Heading, Link } from '../typography'

const FIND_ME_ONLINE_SECTIONS = [
  ['supergrecko#3434', 'https://discordapp.com/users/190902201659424769', '/icons/discord.svg'],
  ['Email me!', 'mailto:me@supergrecko.com', '/icons/gmail.svg'],
  ['GitHub', 'https://github.com/supergrecko', '/icons/github.svg'],
]

export function SplitLayout({ children }: PropsWithChildren<{}>) {
  const router = useRouter()
  return (
    <main className="bg-background max-w-screen-lg py-8 mx-auto">
      <Container className="flex-col lg:flex-row">
        <Container className="w-full space-y-3 lg:w-1/3 p-3" flexDirection="column">
          <Container justifyContent="center" flexDirection="row" className="w-full">
            <img
              src="/favicon.png"
              alt="About Me"
              className="w-1/3 rounded-full lg:rounded-none lg:w-full object-cover float-right"
            />
          </Container>
          <Box>
            <Box className="text-center lg:text-right">
              <Heading>Find me online!</Heading>
            </Box>
            <Container className="flex-row lg:flex-col space-x-3 lg:space-x-0" justifyContent="center">
              {FIND_ME_ONLINE_SECTIONS.map(([site, href, icon]) => (
                <Container key={site} className="lg:space-x-2 justify-center lg:justify-end">
                  <Box className="hidden lg:inline">
                    <Link href={href}>{site}</Link>
                  </Box>
                  <img src={icon} className="w-10 lg:w-6 h-10 lg:h-6" alt={site} onClick={() => router.push(href)} />
                </Container>
              ))}
            </Container>
          </Box>
        </Container>
        <Box className="w-full lg:w-2/3 p-3">{children}</Box>
      </Container>
    </main>
  )
}
