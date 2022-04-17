import { FunctionComponent, ReactNode, useContext } from 'react';
import { AppContext } from '../AppContext';
import { Tabs, TabsProps } from '../tabs/tabs';

const TAB_TARGETS: TabsProps['targets'] = [
  { children: 'About', href: '/' },
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
          <h1 className="tw-text-4xl">Hi, I'm Mats! 👋</h1>
          <div className="tw-mb-6">
            <p>
              I'm a developer and student based in Trondheim, Norway with a passion for building things that people
              love. I love to explore new things, work on open-source software and cook delicious food.
            </p>
          </div>
          <Tabs targets={TAB_TARGETS} />
          {children}
        </div>
      </div>

      <footer className="tw-hidden md:tw-flex tw-w-full tw-p-2 tw-mt-8 tw-row tw-justify-between">
        <p>&copy; {new Date().getFullYear()} Mats Larsen</p>
        <p>&mdash;</p>
        <p className="tw-text-primary hover:tw-text-secondary">
          <a href="https://github.com/matsjla/dotdev" target="_blank" rel="noopener nofollow noreferrer">
            Source on GitHub
          </a>
        </p>
      </footer>
    </main>
  );
};
