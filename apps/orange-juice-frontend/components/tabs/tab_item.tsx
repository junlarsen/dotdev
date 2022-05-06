import { FunctionComponent } from 'react';
import { TabsProps } from './tabs';
import Link from 'next/link';
import { useRouter } from 'next/router';
import clsx from 'clsx';

export const TabItem: FunctionComponent<TabsProps['targets'][number]> = (props) => {
  const { children, href } = props;
  const router = useRouter();
  const isActive = router.pathname === href;
  const classes = clsx('tw-w-1/2 tw-p-1 tw-text-center tw-border-b-2 tw-border-background', {
    'tw-border-secondary': isActive,
  });

  return (
    <Link href={href}>
      <a className={classes}>{children}</a>
    </Link>
  );
};
