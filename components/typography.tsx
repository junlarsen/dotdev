import React, { PropsWithChildren } from 'react'
import { Color, Size } from './theme'
import NextLink from 'next/link'
import clsx from 'clsx'

// text-white text-stroke text-primary text-secondary
// text-sm text-md text-lg text-xl text-2xl text-3xl text-4xl
export function Text({
  children,
  color = 'stroke',
  size = 'lg'
}: PropsWithChildren<{
  color?: Color | 'background'
  size?: Size
}>) {
  const classes = clsx('font-nunito tracking-tight my-2', `text-${color} text-${size}`)
  return <p className={classes}>{children}</p>
}

export function Heading({
  children,
  size = '3xl'
}: PropsWithChildren<{
  size?: Size | 'xl' | '2xl' | '3xl' | '4xl'
}>) {
  const classes = clsx('font-nunito my-2 tracking-tight font-bold text-primary', `text-${size}`)
  return <h2 className={classes}>{children}</h2>
}

export function Link({
  children,
  href,
  className
}: PropsWithChildren<{
  href: string
  className?: string
}>) {
  const classes = clsx('font-nunito text-lg tracking-tight text-secondary underline hover:font-bold', className)
  return (
    <NextLink href={href}>
      <a className={classes}>{children}</a>
    </NextLink>
  )
}
