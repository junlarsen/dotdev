import React, { ReactNode } from 'react'
import { Header, Text } from './Text'
import { OpenInNew } from './Svg'

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
  repo: string
}

export function Project({
  name,
  children,
  repo
}: ProjectProps): JSX.Element {
  return (
    <a href={repo} target="_blank" rel="noreferrer noopener">
      <div
        className="shadow-sm cursor-pointer w-full p-4 md:-mx-4 border border-gray transition transform hover:border-secondary hover:scale-105">
        <div className="pb-4">
          <div className="flex w-full justify-between">
            <Header size="text-3xl" color="text-primary">{name}</Header>
            <div className="py-3">
              <OpenInNew />
            </div>
          </div>
          <Text color="text-background">{children}</Text>
        </div>
      </div>
    </a>
  )
}
