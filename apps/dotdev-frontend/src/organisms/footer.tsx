import { FC } from 'react';
import { css } from '../stitches.config';
import { Text } from '../atoms/text';
import { Link } from '../atoms/link';

export const Footer: FC = () => {
  return (
    <footer className={styles.footer()}>
      <Text>&copy; {new Date().getFullYear()} Mats Jun Larsen</Text>
      <Text>&mdash;</Text>
      <Text>
        <Link href="https://github.com/matsjla/dotdev" target="_blank" rel="noopener nofollow noreferrer">
          Source on GitHub
        </Link>
      </Text>
    </footer>
  );
};

const styles = {
  footer: css({
    display: 'flex',
    width: '100%',
    padding: '$2',
    flexDirection: 'row',
    justifyContent: 'space-between',
  }),
};
