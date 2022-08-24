import { css } from '../../stitches';
import { FunctionComponent, ReactNode } from 'react';

export type HeadlineProps = {
  children: ReactNode;
};

export const Headline: FunctionComponent<HeadlineProps> = (props) => {
  const { children } = props;
  return <h1 className={headlineStyles()}>{children}</h1>;
};

const headlineStyles = css({
  fontWeight: '700',
  fontFamily: '$noto',
  fontSize: '$headline',
  color: '$black',
  margin: '0.5rem 0',
});
