import { FunctionComponent, ReactNode } from 'react';
import { Flex } from '../box/flex';

export type BadgeListProps = {
  children: Iterable<ReactNode>;
};

export const BadgeList: FunctionComponent<BadgeListProps> = (props) => {
  const { children } = props;
  return (
    <Flex
      css={{
        flexDirection: 'row',
        gap: '0.25rem',
      }}>
      {children}
    </Flex>
  );
};
