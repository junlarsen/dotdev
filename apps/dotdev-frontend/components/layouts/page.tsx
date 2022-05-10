import { FunctionComponent, ReactNode } from 'react';
import { Nav } from '../nav/nav';
import { NavLink } from '../nav/nav_link';
import { Paragraph } from '../typography/paragraph';

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

      <main className="app-body tw-max-w-5xl tw-mx-auto tw-py-2">
        <div className="tw-flex tw-flex-col md:tw-flex-row tw-w-full tw-flex-nowrap tw-justify-between">{children}</div>
      </main>

      <div className="tw-pt-8">
        <footer className="tw-flex tw-w-full tw-p-2 tw-row tw-justify-between tw-max-w-5xl tw-mx-auto">
          <Paragraph>&copy; {new Date().getFullYear()} Mats Jun Larsen</Paragraph>
          <Paragraph>&mdash;</Paragraph>
          <Paragraph>
            <a
              href="https://github.com/matsjla/dotdev"
              target="_blank"
              rel="noopener nofollow noreferrer"
              className="tw-text-primary tw-decoration-3 tw-transition tw-ease-in-out hover:tw-underline">
              Source on GitHub
            </a>
          </Paragraph>
        </footer>
      </div>
    </div>
  );
};
