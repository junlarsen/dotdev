import { Heading } from '../atoms/heading';
import { Text } from '../atoms/text';
import { Link } from '../atoms/link';
import { Navigation } from '../organisms/navigation';
import { ContentBoundaryView } from '../templates/content-boundary-view';
import { ProfileSplitView } from '../templates/profile-split-view';
import { Fragment } from 'react';
import { Avatar } from '../atoms/avatar';
import { Box } from '../atoms/box'

export default function App(): JSX.Element {
  return (
    <Fragment>
      <ContentBoundaryView>
        <Navigation />
      </ContentBoundaryView>

      <ContentBoundaryView>
        <ProfileSplitView>
          <Box>
            <Avatar src="/icon.jpg" width={128} height={128} layout="responsive" alt="Profile picture" />
          </Box>
          <Box css={{ alignSelf: 'center' }}>
            <Heading size="h1" as="h1">Hi, I&apos;m Mats! 👋</Heading>
            <Text>
              I&apos;m a developer and student based in Trondheim, Norway with a passion for building things that people
              love. I love to explore new things, work on free open-source software, and cook food.
            </Text>
            <Text>
              I&apos;m currently studying computer science at&nbsp;
              <Link href="https://www.ntnu.no/">NTNU</Link>&nbsp;in Trondheim, Norway, working part-time as a frontend
              developer remotely. I&apos;m also a core contributor to the&nbsp;
              <Link href="https://godbolt.org">Compiler Explorer</Link>
              &nbsp;project.
            </Text>
          </Box>
        </ProfileSplitView>
      </ContentBoundaryView>
    </Fragment>
  );
}
