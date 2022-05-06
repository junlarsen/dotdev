import { FunctionComponent } from 'react';
import Link from 'next/link';
import { MaterialIcon } from '../icon/material_icon';

export type NavIconProps = {
  children: string;
  href: string;
};

export const NavIcon: FunctionComponent<NavIconProps> = (props) => {
  const { children, href } = props;

  return (
    <Link href={href}>
      <a>
        <MaterialIcon type={children} />
      </a>
    </Link>
  );
};
