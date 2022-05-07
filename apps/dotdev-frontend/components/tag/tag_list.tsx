import { FunctionComponent, ReactNode } from 'react';

export type TagListProps = {
  children: Iterable<ReactNode>;
};

export const TagList: FunctionComponent<TagListProps> = (props) => {
  const { children } = props;
  return <div className="tw-flex tw-flex-row tw-gap-1">{children}</div>;
};
