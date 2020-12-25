import React, { ReactNode } from 'react'
import NextLink from 'next/link'
import clsx from 'clsx'

export type HeaderProps = {
  children: ReactNode
  id?: string
  color?: string
  element?: keyof JSX.IntrinsicElements
  size?: 1 | 2 | 3 | 4 | 5 | 6
}

export function Header({
  children,
  id,
  color = "text-tertiary",
  element: Component = "h2",
  size = 6
}: HeaderProps): JSX.Element {
  const classes = clsx("font-noto-sans my-4 font-bold", color, `text-${size}xl`)

  return (
    <Component id={id} className={classes}>{children}</Component>
  )
}

export type TextProps = {
  children: ReactNode
  color?: string
}

export function Text({
  children,
  color = "text-white"
}: TextProps): JSX.Element {
  const classes = clsx("font-noto-sans text-3xl", color)

  return (
    <p className={classes}>{children}</p>
  )
}

export type LinkProps = {
  children: ReactNode
  href: string
  color?: string
}

export function Link({
  children,
  href,
  color = "text-primary"
}: LinkProps): JSX.Element {
  const classes = clsx("text-3xl", color)

  return (
    <NextLink href={href}>
      <a className={classes}>{children}</a>
    </NextLink>
  )
}