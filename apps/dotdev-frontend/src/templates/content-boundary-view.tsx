import { styled } from '../stitches.config';

export const ContentBoundaryView = styled('div', {
  padding: '$3',
  '& > *': {
    maxWidth: '1024px',
    margin: '0 auto',
  },
  variants: {
    color: {
      white: { backgroundColor: '$pinkA1' },
      brand: { backgroundColor: '$orangeA9' },
    },
  },
  defaultVariants: {
    color: 'white',
  },
});
