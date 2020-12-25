import React, { ReactNode } from 'react'
import { Header, Link, Text } from './Text'

export type LayoutSectionProps = {
  children: ReactNode
  footer?: ReactNode
  backgroundColor: string
}

export function LayoutSection({
  children,
  footer,
  backgroundColor
}: LayoutSectionProps): JSX.Element {
  return (
    <section className={backgroundColor}>
      <div className="max-w-screen-lg mx-auto p-3">
        {children}
      </div>
      {footer}
    </section>
  )
}

export type ProjectProps = {
  name: string
  children: ReactNode
  href?: string
  repo: string
}

export function Project({
  name,
  children,
  href,
  repo
}: ProjectProps): JSX.Element {
  return (
    <div className="shadow-sm w-full p-4 md:-mx-4 border border-gray w-1/3">
      <div className="pb-4">
        <Header size="text-3xl" color="text-secondary">{name}</Header>
        <Text color="text-secondary">{children}</Text>
      </div>

      <div className="space-x-6">
        {href && <Link href={href}>Project Homepage</Link>}
        <Link href={`https://github.com/${repo}`}>View on GitHub</Link>
      </div>
    </div>
  )
}