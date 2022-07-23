import { styled } from '../stitches.config';
import { Link } from '../atoms/link';

export const NavigationLink = styled(Link, {
  fontWeight: '$ultra',
  fontSize: '$lg',
  color: '$blackA12',
  marginTop: 0,
  marginBottom: 0,
  textDecoration: 'none',
  '&:hover': {
    color: '$blackA12',
    textDecorationColor: '$orangeA10',
    textDecorationThickness: '4px',
  },
});
