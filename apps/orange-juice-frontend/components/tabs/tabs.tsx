import { FunctionComponent, ReactText } from 'react';
import { TabItem } from './tab_item';

export type TabsProps = {
  targets: {
    children: ReactText;
    href: string;
  }[];
};

export const Tabs: FunctionComponent<TabsProps> = (props) => {
  const { targets } = props;

  return (
    <div className="tw-bg-stroke tw-flex tw-flex-row">
      {targets.map(({ href, children }) => (
        <TabItem key={href} href={href}>
          {children}
        </TabItem>
      ))}
    </div>
  );
};
