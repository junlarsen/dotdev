import { FunctionComponent, ReactNode } from 'react';
import { css, styled } from '../stitches';
import { NavbarLink } from '../organisms/navbar/navbar_link';
import { Navbar } from '../organisms/navbar/navbar';
import { Flex } from '../atoms/box/flex';
import { Paragraph } from '../atoms/typography/paragraph';
import { Link } from '../atoms/typography/link';

export type PageProps = {
  children: ReactNode;
};

export const Page: FunctionComponent<PageProps> = (props) => {
  const { children } = props;

  return (
    <div className={pageStyles()}>
      <div className={navbarContainerStyles()}>
        <Navbar icon={<NavbarLink href="/">٩(◕‿◕｡)۶</NavbarLink>}>
          <NavbarLink decorate href="/projects">
            Projects
          </NavbarLink>
          <NavbarLink decorate href="/blog">
            Blog
          </NavbarLink>
          <NavbarLink decorate href="/recipes">
            Recipes
          </NavbarLink>
          <NavbarLink decorate href="/contact">
            Contact
          </NavbarLink>
        </Navbar>
      </div>

      <div className={bodyContainerStyles()}>
        <BodyContainer>{children}</BodyContainer>
      </div>

      <Footer as="footer">
        <Paragraph>&copy; {new Date().getFullYear()} Mats Jun Larsen</Paragraph>
        <Paragraph>&mdash;</Paragraph>
        <Paragraph>
          <Link href="https://github.com/matsjla/dotdev" external>
            Source on GitHub
          </Link>
        </Paragraph>
      </Footer>
    </div>
  );
};

const pageStyles = css({
  minHeight: '100vh',
  backgroundColor: '$background',
});

const navbarContainerStyles = css({
  maxWidth: '64rem',
  margin: '0 auto',
});

const bodyContainerStyles = css({
  minHeight: 'calc(100vh - 88px - 52px)',
  maxWidth: '64rem',
  margin: '0 auto',
  padding: '0.5rem 0 2rem 0',
});

const BodyContainer = styled(Flex, {
  width: '100%',
  flexDirection: 'column',
  flexWrap: 'nowrap',
  justifyContent: 'space-between',
  '@md': {
    flexDirection: 'row',
  },
});

const Footer = styled(Flex, {
  padding: '0.5rem',
  flexDirection: 'row',
  justifyContent: 'space-between',
  maxWidth: '64rem',
  margin: '0 auto',
});
