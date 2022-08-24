import { FunctionComponent, ReactNode } from 'react';
import { styled } from '../../stitches';

export type HeadingProps = {
  children: ReactNode;
  size: 1 | 2 | 3 | 4 | 5;
};

export const Heading: FunctionComponent<HeadingProps> = (props) => {
  const { children, size } = props;
  const as = `h${size + 1}` as 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

  return (
    <HeadingComponent as={as} size={size}>
      {children}
    </HeadingComponent>
  );
};

const HeadingComponent = styled('h2', {
  fontWeight: '700',
  fontFamily: '$noto',
  color: '$black',
  margin: '0.5rem 0',
  variants: {
    size: {
      5: {
        fontSize: '$heading5',
      },
      4: {
        fontSize: '$heading4',
      },
      3: {
        fontSize: '$heading3',
      },
      2: {
        fontSize: '$heading2',
      },
      1: {
        fontSize: '$heading1',
      },
    },
  },
});
