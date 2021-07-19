import React, { PropsWithChildren } from 'react'
import { Color, Size } from './theme'
import { default as NextLink } from 'next/link'
import clsx from 'clsx'

// text-grey text-red text-blue text-green text-yellow text-white text-background
// text-sm text-md text-lg text-xl text-2xl text-3xl text-4xl
export function Text({
  children,
  color = 'grey',
  size = 'lg'
}: PropsWithChildren<{
  color?: Color | 'background'
  size?: Size
}>) {
  const classes = clsx('font-nunito tracking-tight', `text-${color} text-${size}`)
  return <p className={classes}>{children}</p>
}

export function Heading({
  children,
  size = '2xl'
}: PropsWithChildren<{
  size?: Size | 'xl' | '2xl' | '3xl' | '4xl'
}>) {
  const classes = clsx('font-nunito my-2 tracking-tight text-blue', `text-${size}`)
  return <h2 className={classes}>{children}</h2>
}

export function Link({
  children,
  href
}: PropsWithChildren<{
  href: string
}>) {
  return (
    <NextLink href={href}>
      <a className="font-nunito text-lg tracking-tight text-white underline hover:font-bold">{children}</a>
    </NextLink>
  )
}
