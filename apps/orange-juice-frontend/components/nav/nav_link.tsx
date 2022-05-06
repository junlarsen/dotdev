import { FunctionComponent, ReactNode } from 'react';
import Link from 'next/link';

export type NavLinkProps = {
  children: ReactNode;
  href: string;
};

export const NavLink: FunctionComponent<NavLinkProps> = (props) => {
  const { children, href } = props;

  return (
    <Link href={href}>
      <a className="tw-align-middle tw-text-xl tw-p-1 tw-font-bold tw-decoration-3 tw-transition tw-ease-in-out hover:tw-underline">
        {children}
      </a>
    </Link>
  );
};
