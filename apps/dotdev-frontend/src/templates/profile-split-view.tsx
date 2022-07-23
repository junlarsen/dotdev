import { styled } from '../stitches.config';
import { Flex } from '../atoms/flex';

export const ProfileSplitView = styled(Flex, {
  width: '100%',
  gap: '$3',
  flexDirection: 'column',
  '@md': {
    flexDirection: 'row',
  },
  '& > *': { width: '100%' },
  '& > *:nth-child(1)': {
    '@md': { width: '30%' },
  },
  '& > *:nth-child(2)': {
    '@md': { width: '70%' },
  },
});
