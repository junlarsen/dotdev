import { styled } from '../stitches.config';

export const Text = styled('p', {
  fontFamily: '$display',
  fontSize: '$md',
  lineHeight: '$md',
  marginTop: '$2',
  marginBottom: '$2',
  letterSpacing: '$tight',
  variants: {
    contrast: {
      high: { color: '$blackA12' },
      low: { color: '$blackA11 ' },
    },
  },
  defaultVariants: {
    contrast: 'high',
  },
});
