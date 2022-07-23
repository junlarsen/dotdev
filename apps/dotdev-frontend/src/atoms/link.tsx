import { styled } from '../stitches.config';

export const Link = styled('a', {
  fontFamily: '$display',
  fontSize: '$md',
  lineHeight: '$md',
  marginTop: '$2',
  marginBottom: '$2',
  letterSpacing: '$tight',
  color: '$orangeA9',
  '&:hover': {
    color: '$orangeA10',
    textDecoration: 'underline',
    textDecorationThickness: '2px',
  },
});
