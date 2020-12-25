import React, { MouseEvent, ReactNode } from 'react'
import clsx from 'clsx'

export type ButtonProps = {
  onClick: (event: MouseEvent) => void
  children: ReactNode
  className?: string
}

export default function Button({
  onClick,
  children,
  className
}: ButtonProps): JSX.Element {
  const classes = clsx(className, "uppercase px-12 my-2 py-6")

  return (
    <button className={classes} onClick={onClick}>
      <span className="font-noto-sans font-light text-3xl">{children}</span>
    </button>
  )
}