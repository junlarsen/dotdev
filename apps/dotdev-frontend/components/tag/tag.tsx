import { FunctionComponent } from 'react';

export type TagProps = {
  tag: string;
};

export const Tag: FunctionComponent<TagProps> = (props) => {
  const { tag } = props;
  return <div className="tw-border-secondary tw-border-2 tw-rounded-2xl tw-p-1">{tag}</div>;
};
