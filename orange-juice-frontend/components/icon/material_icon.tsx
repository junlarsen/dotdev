import { FunctionComponent } from 'react';
import clsx from 'clsx';

export type MaterialIconProps = {
  type: string;
  className?: string;
};

export const MaterialIcon: FunctionComponent<MaterialIconProps> = (props) => {
  const { type, className } = props;
  const classes = clsx(className, 'tw-not-italic tw-font-icons');
  return (
    <div className="tw-p-1">
      <i className={classes}>{type}</i>
    </div>
  );
};
