import { FunctionComponent, ReactNode } from 'react';
import NextLink from 'next/link';

export type LinkProps = {
  children: ReactNode;
  href: string;
};

export const Link: FunctionComponent<LinkProps> = (props) => {
  const { children, href } = props;
  return (
    <NextLink href={href}>
      <a>{children}</a>
    </NextLink>
  );
};
