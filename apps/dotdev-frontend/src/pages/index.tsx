import Head from 'next/head';
import { Page } from '../templates/page';
import { Paragraph } from '../atoms/typography/paragraph';
import { Link } from '../atoms/typography/link';
import Image from 'next/image';
import { Headline } from '../atoms/typography/headline';
import { css, styled } from '../stitches';

export default function App(): JSX.Element {
  return (
    <Page>
      <Head>
        <title>Home | Jun&apos;s Crusty Corner</title>
        <meta name="description" content="This is the Crusty Corner, my personal space on the internet!" />
      </Head>
      <div className={leftSectionStyles()}>
        <div className={profilePictureWrapperStyles()}>
          <ProfilePicture
            src="/icon.jpg"
            width={128}
            height={128}
            layout="responsive"
            alt="Profile picture"
            priority
          />
        </div>
      </div>
      <div className={rightSectionStyles()}>
        <Headline>Hi, I&apos;m Mats! 👋</Headline>
        <div className="tw-mb-6">
          <Paragraph>
            I&apos;m a developer and student based in Trondheim, Norway with a passion for building things that people
            love. I love to explore new things, work on free open-source software, and cook food.
          </Paragraph>

          <Paragraph>
            I&apos;m currently studying computer science at&nbsp;
            <Link href="https://www.ntnu.no/">NTNU</Link>&nbsp;in Trondheim, Norway, working part-time as a frontend
            developer remotely. I&apos;m also a core contributor to the&nbsp;
            <Link href="https://godbolt.org">Compiler Explorer</Link>
            &nbsp;project.
          </Paragraph>
          {/*<hr className="tw-my-4" />*/}
          {/*<SpotifyWidget />*/}
        </div>
      </div>
    </Page>
  );
}

const leftSectionStyles = css({
  width: '100%',
  padding: '0.5rem',
  '@md': {
    width: '33.33%',
  },
});

const rightSectionStyles = css({
  width: '100%',
  padding: '0.5rem',
  '@md': {
    width: '66.66%',
  }
})

const profilePictureWrapperStyles = css({
  width: '100%',
  height: '100%',
});

const ProfilePicture = styled(Image, {
  borderRadius: '999px',
})
