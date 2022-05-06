import { FunctionComponent, ReactNode } from 'react';
import { Nav } from '../nav/nav';
import { NavLink } from '../nav/nav_link';

export type PageProps = {
  children: ReactNode;
};

export const Page: FunctionComponent<PageProps> = (props) => {
  const { children } = props;

  return (
    <main className="tw-max-w-5xl	tw-mx-auto tw-p-8">
      <Nav icon={<NavLink href="/">٩(◕‿◕｡)۶</NavLink>}>
        <NavLink href="/projects">Projects</NavLink>
        <NavLink href="/blog">Blog</NavLink>
        <NavLink href="/recipes">Recipes</NavLink>
        <NavLink href="/contact">Contact</NavLink>
      </Nav>

      <div className="tw-flex tw-flex-col md:tw-flex-row tw-flex-nowrap tw-justify-between">{children}</div>

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
