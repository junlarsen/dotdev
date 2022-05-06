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
      <a className="tw-align-middle tw-text-xl tw-p-1 tw-font-bold">{children}</a>
    </Link>
  );
};
