import { FunctionComponent, ReactNode } from 'react';
import NextLink from 'next/link';
import { styled } from '../../stitches';

export type NavbarLinkProps = {
  children: ReactNode;
  href: string;
  decorate?: boolean;
};

export const NavbarLink: FunctionComponent<NavbarLinkProps> = (props) => {
  const { children, href, decorate } = props;

  return (
    <NextLink href={href}>
      <NavbarLinkComponent decorate={decorate}>{children}</NavbarLinkComponent>
    </NextLink>
  );
};

const NavbarLinkComponent = styled('a', {
  fontFamily: '$noto',
  verticalAlign: 'middle',
  fontSize: '$heading3',
  fontWeight: '700',
  lineHeight: '1.75',
  color: '$black',
  padding: '0.25rem',
  textDecorationColor: '$primary',
  transitionProperty: 'text-decoration-color',
  transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1);',
  transitionDuration: '150ms',
  variants: {
    decorate: {
      true: {
        '&:hover': {
          textDecoration: 'underline',
          textDecorationThickness: '4px',
          textDecorationColor: '$primary',
        },
      },
      false: {},
    },
  },
});
