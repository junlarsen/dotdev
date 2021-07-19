import React, { PropsWithChildren } from 'react'
import { Color } from './theme'
import clsx from 'clsx'

export function Section({ children }: PropsWithChildren<{}>) {
  return <div className="my-3">{children}</div>
}

// border-yellow border-red border-green border-blue border-white border-grey
export function HorizontalDivider({ color = 'yellow' }: { color?: Color }) {
  const classes = clsx(`border-${color}`)
  return (
    <Section>
      <hr className={classes} />
    </Section>
  )
}
