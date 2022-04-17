import { FunctionComponent, ReactNode, useContext } from 'react';
import { AppContext } from '../AppContext';
import { Tabs, TabsProps } from '../tabs/tabs';

const TAB_TARGETS: TabsProps['targets'] = [
  { children: 'About', href: '/' },
  { children: 'Projects', href: '/projects' },
  { children: 'Contact', href: '/contact' },
];

export type PageProps = {
  children: ReactNode;
};

export const Page: FunctionComponent<PageProps> = (props) => {
  const { setTheme } = useContext(AppContext);

  const onThemeChange = (): void => {
    setTheme((theme) => (theme === 'light' ? 'dark' : 'light'));
  };

  const { children } = props;
  return (
    <main className="tw-max-w-5xl	tw-mx-auto tw-p-8">
      <div className="tw-flex tw-flex-col md:tw-flex-row tw-flex-nowrap tw-justify-between">
        <div className="tw-w-full md:tw-w-1/3 tw-p-2">
          <div className="tw-w-full tw-h-full">
            <img className="tw-w-full tw-object-contain" src="/favicon.png" alt="logo" />
          </div>
        </div>
        <div className="tw-w-full md:tw-w-2/3 tw-p-2">
          <h1 className="tw-text-4xl dark:tw-text-primary">Hello there! 👋</h1>
          <div className="tw-mb-6">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sapien nisl, commodo dapibus consequat vel,
              egestas vulputate metus. Aenean dapibus facilisis neque, in tincidunt quam egestas sed. Sed vitae nunc
              quis dolor ultricies imperdiet ut vitae enim.
            </p>
          </div>
          <Tabs targets={TAB_TARGETS} />
          {children}
        </div>
      </div>

      <footer className="tw-hidden md:tw-flex tw-w-full tw-p-2 tw-mt-8 tw-row tw-justify-between">
        <p>&copy; {new Date().getFullYear()} Mats Larsen</p>
        <p>&mdash;</p>
        <p className="tw-text-primary hover:tw-text-secondary dark:hover:tw-text-stroke">
          <a href="https://github.com/matsjla/dotdev" target="_blank" rel="noopener nofollow noreferrer">
            Source on GitHub
          </a>
        </p>
      </footer>
    </main>
  );
};
