import React, { ReactNode } from 'react'
import NextLink from 'next/link'
import clsx from 'clsx'

export type HeaderProps = {
  children: ReactNode
  id?: string
  color?: string
  size?: string
  element?: keyof JSX.IntrinsicElements
}

export function Header({
  children,
  id,
  color = "text-secondary",
  element: Component = "h2",
  size = "text-6xl"
}: HeaderProps): JSX.Element {
  const classes = clsx("font-noto-sans my-4 font-bold", color, size)

  return (
    <Component id={id} className={classes}>{children}</Component>
  )
}

export type TextProps = {
  children: ReactNode
  color?: string
  size?: string
}

export function Text({
  children,
  color = "text-white",
  size = "text-2xl"
}: TextProps): JSX.Element {
  const classes = clsx("font-noto-sans", size, color)

  return (
    <p className={classes}>{children}</p>
  )
}

export type LinkProps = {
  children: ReactNode
  href: string
  color?: string
  hover?: string
}

export function Link({
  children,
  href,
  color = "text-primary",
  hover = "text-secondary"
}: LinkProps): JSX.Element {
  const classes = clsx("text-3xl", `hover:${hover}`, color)

  return (
    <NextLink href={href}>
      <a target="_blank" rel="noreferrer noopener" className={classes}>{children}</a>
    </NextLink>
  )
}