import { styled } from '../../stitches';
import { FunctionComponent, ReactNode } from 'react';

export type HeadlineProps = {
  children: ReactNode;
}

export const Headline: FunctionComponent<HeadlineProps> = (props) => {
  const { children } = props;
  return (
    <HeadlineComponent>
      {children}
    </HeadlineComponent>
  );
}

const HeadlineComponent = styled('h1', {
  fontWeight: 'bold',
  fontFamily: '$noto',
  fontSize: '$headline',
  color: '$black',
  margin: '0.5rem 0'
});
