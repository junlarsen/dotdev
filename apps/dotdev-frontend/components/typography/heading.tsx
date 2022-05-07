import { FunctionComponent, ReactNode } from 'react';
import clsx from 'clsx';

export type HeadingProps = {
  children: ReactNode;
  size: 1 | 2 | 3 | 4 | 5 | 6;
};

export const Heading: FunctionComponent<HeadingProps> = (props) => {
  const { children, size } = props;
  const Component = `h${size}` as const;
  // tw-text-lg tw-text-2xl tw-text-3xl tw-text-4xl tw-text-5xl
  const classes = clsx('tw-font-bold', {
    'tw-text-4xl': size === 1,
    'tw-text-3xl': size === 2,
    'tw-text-2xl': size === 3,
    'tw-text-xl': size === 4,
    'tw-text-lg': size === 5,
    'tw-text-md': size === 6,
  });

  return <Component className={classes}>{children}</Component>;
};
