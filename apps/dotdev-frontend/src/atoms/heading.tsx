import { styled } from '../stitches.config';

export const Heading = styled('h2', {
  color: '$blackA12',
  fontWeight: '$bold',
  fontFamily: '$display',
  marginTop: '$2',
  marginBottom: '$2',
  letterSpacing: '$tight',
  variants: {
    size: {
      h1: { fontSize: '$xxl', lineHeight: '$xxl' },
      h2: { fontSize: '$xl', lineHeight: '$xl' },
      h3: { fontSize: '$lg', lineHeight: '$lg' },
    },
  },
  defaultVariants: {
    size: 'h2',
  },
});
