import { FunctionComponent } from 'react';
import { css } from '../../stitches';

export type MaterialIconProps = {
  type: string;
};

export const MaterialIcon: FunctionComponent<MaterialIconProps> = (props) => {
  const { type } = props;
  return <i className={materialIconStyles()}>{type}</i>;
};

const materialIconStyles = css({
  fontStyle: 'normal',
  fontFamily: '$icons',
  fontSize: 'inherit',
});
