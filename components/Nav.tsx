import React, { ReactNode, Fragment } from 'react'
import clsx from 'clsx'

export type NavProps = {
  links: {
    href: string,
    text: string
  }[]
}

export default function Nav({
  links
}: NavProps): JSX.Element {

  return (
    <div className="py-8 flex justify-between">
      <div className="hidden md:inline">
        <NavLink href="#top">Home</NavLink>
      </div>
      <div className="flex space-x-4">
        {links.map(child => (
          <NavLink key={child.text} href={child.href}>{child.text}</NavLink>
        ))}
      </div>
    </div>
  )
}

export type NavLinkProps = {
  href: string
  children: ReactNode,
}

export function NavLink({
  href,
  children,
}: NavLinkProps): JSX.Element {
  const classes = clsx("font-noto-sans underline flex-initial text-white transition hover:text-primary text-3xl")

  return (
    <a className={classes} href={href}>
      {children}
    </a>
  )
}