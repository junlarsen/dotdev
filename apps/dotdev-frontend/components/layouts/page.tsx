import { FunctionComponent, ReactNode } from 'react';
import { Nav } from '../nav/nav';
import { NavLink } from '../nav/nav_link';

export type PageProps = {
  children: ReactNode;
};

export const Page: FunctionComponent<PageProps> = (props) => {
  const { children } = props;

  return (
    <div className="tw-min-h-screen tw-bg-background">
      <div className="tw-max-w-5xl tw-mx-auto">
        <Nav icon={<NavLink href="/">٩(◕‿◕｡)۶</NavLink>}>
          <NavLink href="/projects">Projects</NavLink>
          <NavLink href="/blog">Blog</NavLink>
          <NavLink href="/recipes">Recipes</NavLink>
          <NavLink href="/contact">Contact</NavLink>
        </Nav>
      </div>

      <main className="app-body tw-max-w-5xl tw-mx-auto tw-py-8">
        <div className="tw-flex tw-flex-col md:tw-flex-row tw-w-full tw-flex-nowrap tw-justify-between">{children}</div>
      </main>

      <div className="tw-p-8 tw-bg-secondary tw-text-background">
        <footer className="tw-flex tw-w-full tw-p-2 tw-row tw-justify-between tw-max-w-5xl tw-mx-auto">
          <p>&copy; {new Date().getFullYear()} Mats Larsen</p>
          <p>&mdash;</p>
          <p className="tw-text-primary tw-decoration-3 tw-transition tw-ease-in-out hover:tw-underline">
            <a href="https://github.com/matsjla/dotdev" target="_blank" rel="noopener nofollow noreferrer">
              Source on GitHub
            </a>
          </p>
        </footer>
      </div>
    </div>
  );
};
