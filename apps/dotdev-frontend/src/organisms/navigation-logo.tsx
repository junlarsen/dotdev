import { FC } from 'react';
import NextLink from 'next/link';
import { NavigationLink } from './navigation-link';

export const NavigationLogo: FC = () => {
  return (
    <NextLink passHref href="/">
      <NavigationLink>٩(◕‿◕｡)۶</NavigationLink>
    </NextLink>
  );
};
