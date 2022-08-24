import { FunctionComponent, ReactNode } from 'react';
import { css } from '../../stitches';

export type ParagraphProps = {
  children: ReactNode;
};

export const Paragraph: FunctionComponent<ParagraphProps> = (props) => {
  const { children } = props;
  return <p className={paragraphStyles()}>{children}</p>;
};

const paragraphStyles = css({
  color: '$black',
  fontFamily: '$noto',
  fontSize: '$body',
  lineHeight: '1.5',
  margin: '0.5rem 0',
});
