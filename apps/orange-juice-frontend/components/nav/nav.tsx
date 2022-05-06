import { FunctionComponent, ReactNode, useState } from 'react';
import { useWindowDimensions } from '../useWindowDimensions';
import { MaterialIcon } from '../icon/material_icon';

export type NavProps = {
  children: ReactNode;
  icon: ReactNode;
};

export const Nav: FunctionComponent<NavProps> = (props) => {
  const { children, icon } = props;
  const [isOpen, setIsOpen] = useState(false);
  const windowSize = useWindowDimensions();

  return (
    <nav className="tw-flex tw-flex-col md:tw-flex-row md:tw-justify-between tw-p-2">
      <div className="tw-flex tw-justify-between">
        {icon}
        {windowSize.width < 768 && (
          <button
            type="button"
            onClick={(): void => {
              setIsOpen((s) => !s);
            }}>
            <MaterialIcon type="reorder" />
          </button>
        )}
      </div>
      {(isOpen || windowSize.width >= 768) && (
        <div className="tw-flex tw-flex-col md:tw-flex-row tw-gap-x-4">{children}</div>
      )}
    </nav>
  );
};
