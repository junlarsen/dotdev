import { FunctionComponent, ReactNode } from 'react';

export type ParagraphProps = {
  children: ReactNode;
};

export const Paragraph: FunctionComponent<ParagraphProps> = (props) => {
  const { children } = props;
  return <p className="tw-my-2 tw-text-black tw-font-noto">{children}</p>;
};
