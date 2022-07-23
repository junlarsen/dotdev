import { Heading } from '../atoms/heading';
import { Text } from '../atoms/text';
import { Navigation } from '../organisms/navigation';
import { ContentBoundaryView } from '../templates/content-boundary-view';
import { ProfileSplitView } from '../templates/profile-split-view';
import { Fragment } from 'react';
import { Avatar } from '../atoms/avatar';
import { Box } from '../atoms/box';
import { MainView } from '../templates/main-view';
import { Footer } from '../organisms/footer';

export default function App(): JSX.Element {
  return (
    <Fragment>
      <ContentBoundaryView>
        <Navigation />
      </ContentBoundaryView>

      <MainView>
        <ContentBoundaryView>
          <ProfileSplitView>
            <Box>
              <Avatar src="/icon.jpg" width={128} height={128} layout="responsive" alt="Profile picture" />
            </Box>
            <Box css={{ alignSelf: 'center' }}>
              <Heading size="h1" as="h1">
                Hi, I&apos;m Mats! 👋
              </Heading>
              <Text>
                I&apos;m a developer and student based in Norway with a passion for building things that people love. I
                love to explore new things, work on free open-source software, and cook food.
              </Text>
              <Text>
                This website is my tiny space on the internet where I occasionally write about things that I enjoy.
              </Text>
            </Box>
          </ProfileSplitView>
        </ContentBoundaryView>
      </MainView>

      <ContentBoundaryView>
        <Footer />
      </ContentBoundaryView>
    </Fragment>
  );
}
