import { FunctionComponent, ReactNode } from 'react';
import NextLink from 'next/link';
import { css } from '../../stitches';
import { MaterialIcon } from '../icon/material_icon';

export type LinkProps = {
  children: ReactNode;
  href: string;
  external?: boolean;
};

export const Link: FunctionComponent<LinkProps> = (props) => {
  const { children, href, external } = props;

  if (external === true) {
    return (
      <a className={linkStyles()} href={href} rel="noopener nofollow noreferrer" target="_blank">
        {children}
        &nbsp;
        <MaterialIcon type="open_in_new" />
      </a>
    );
  }

  return (
    <NextLink href={href}>
      <a className={linkStyles()}>{children}</a>
    </NextLink>
  );
};

const linkStyles = css('a', {
  fontFamily: 'inherit',
  color: '$primary',
  textDecorationThickness: '2px',
  '&:hover': {
    textDecoration: 'underline',
  },
});
