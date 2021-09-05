import React, { PropsWithChildren } from 'react'
import { Color } from './theme'
import clsx from 'clsx'

export function Section({
  children,
  className
}: PropsWithChildren<{
  className?: string
}>) {
  const classes = clsx('my-3', className)
  return <div className={classes}>{children}</div>
}

// border-white border-stroke border-primary border-secondary
export function HorizontalDivider({ color = 'primary' }: { color?: Color }) {
  const classes = clsx(`border-${color} mb-8`)
  return (
    <Section>
      <hr className={classes} />
    </Section>
  )
}
