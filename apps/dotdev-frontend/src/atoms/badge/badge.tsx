import { FunctionComponent, ReactText } from 'react';
import { css } from '../../stitches';

export type BadgeProps = {
  children: ReactText;
};

export const Badge: FunctionComponent<BadgeProps> = (props) => {
  const { children } = props;
  return <div className={badgeStyles()}>{children}</div>;
};

const badgeStyles = css({
  border: '2px',
  borderColor: '$primary',
  borderRadius: '1rem',
  padding: '0.25rem',
});
