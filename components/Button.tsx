import React, { ReactNode } from 'react'
import clsx from 'clsx'

export type ButtonProps = {
  href: string
  children: ReactNode
  className?: string
}

export default function Button({ href, children, className }: ButtonProps): JSX.Element {
  const classes = clsx(className, 'uppercase px-12 py-6')

  return (
    <a href={href} className="my-2 p-0">
      <div className={classes}>
        <span className="font-noto-sans font-light text-3xl">{children}</span>
      </div>
    </a>
  )
}
