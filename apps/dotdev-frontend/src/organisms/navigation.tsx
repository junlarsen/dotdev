import { FC, useState } from 'react';
import { useWindowDimensions } from '../hooks/use-window-dimensions';
import { NavigationLogo } from './navigation-logo';
import { NavigationLink } from './navigation-link';
import { Flex } from '../atoms/flex';
import { MdReorder } from 'react-icons/md';
import { css, styled } from '../stitches.config';
import NextLink from 'next/link';

export const Navigation: FC = () => {
  const [isOpen, setOpen] = useState(false);
  const windowSize = useWindowDimensions();

  return (
    <nav data-expanded={isOpen} className={styles.nav()}>
      <Flex css={{ justifyContent: 'space-between' }}>
        <NavigationLogo />

        {windowSize.width < 768 && (
          <Button
            type="button"
            onClick={(): void => {
              setOpen((s) => !s);
            }}>
            <MdReorder size={36} />
          </Button>
        )}
      </Flex>

      {(isOpen || windowSize.width >= 768) && (
        <div className={styles.right()}>
          <NextLink passHref href="/#">
            <NavigationLink>Projects</NavigationLink>
          </NextLink>
          <NextLink passHref href="/#">
            <NavigationLink>Contact</NavigationLink>
          </NextLink>
        </div>
      )}
    </nav>
  );
};

const styles = {
  nav: css({
    display: 'flex',
    padding: '$2',
    flexDirection: 'column',
    '&[data-expanded="true"]': {
      borderBottom: '1px solid $slate6',
      '@md': {
        borderBottom: 'none',
      },
    },
    '@md': {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
  }),
  right: css({
    display: 'flex',
    flexDirection: 'column',
    gap: '$1 $4',
    '@md': {
      flexDirection: 'row',
    },
  }),
};

const Button = styled('button', {
  appearance: 'none',
  backgroundColor: 'transparent',
  border: 'none',
  boxSizing: 'border-box',
  fontFamily: 'inherit',
  fontSize: '100%',
  lineHeight: '1',
  outline: 'none',
  padding: '0',
  textDecoration: 'none',
  userSelect: 'none',
  WebkitTapHighlightColor: 'rgba(0,0,0,0)',
  '&::before': {
    boxSizing: 'border-box',
    content: "''",
  },
  '&::after': {
    boxSizing: 'border-box',
    content: "''",
  },
});
