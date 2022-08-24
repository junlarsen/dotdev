import { FunctionComponent, ReactNode, useState } from 'react';
import { styled } from '../../stitches';
import { Flex } from '../../atoms/box/flex';
import { useWindowDimensions } from '../../components/useWindowDimensions';
import { MaterialIcon } from '../../atoms/icon/material_icon';

export type NavbarProps = {
  children: Iterable<ReactNode>;
  icon: ReactNode;
};

export const Navbar: FunctionComponent<NavbarProps> = (props) => {
  const { children, icon } = props;
  const [isOpen, setIsOpen] = useState(false);
  const windowSize = useWindowDimensions();

  return (
    <NavComponent>
      <Flex css={{ justifyContent: 'space-between' }}>
        {icon}
        {windowSize.width < 768 && (
          <NavButton
            type="button"
            onClick={(): void => {
              setIsOpen((s) => !s);
            }}>
            <MaterialIcon type="reorder" />
          </NavButton>
        )}
      </Flex>
      {(isOpen || windowSize.width >= 768) && <NavContainerComponent>{children}</NavContainerComponent>}
    </NavComponent>
  );
};

const NavComponent = styled(Flex, {
  width: '100%',
  flexDirection: 'column',
  padding: '0.5rem',
  '@md': {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

const NavContainerComponent = styled(Flex, {
  flexDirection: 'column',
  gap: '1rem',
  '@md': {
    flexDirection: 'row',
  },
});

const NavButton = styled('button', {
  fontSize: '$heading4 !important',
  border: 'none',
  margin: '0',
  padding: 0,
  background: 'transparent',
  width: 'auto',
  overflow: 'visible',
  color: 'inherit',
  font: 'inherit',
  lineHeight: 'normal',
})
