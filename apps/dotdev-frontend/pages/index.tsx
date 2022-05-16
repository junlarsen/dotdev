import Head from 'next/head';
import { Page } from '../components/layouts/page';
import { Heading } from '../components/typography/heading';
import { Paragraph } from '../components/typography/paragraph';
import { Link } from '../components/typography/link';
import Image from 'next/image';

export default function App(): JSX.Element {
  return (
    <Page>
      <Head>
        <title>Home | Jun&apos;s Crusty Corner</title>
        <meta name="description" content="This is the Crusty Corner, my personal space on the internet!" />
      </Head>
      <div className="tw-w-full md:tw-w-1/3 tw-p-2">
        <div className="tw-w-full tw-h-full">
          <Image
            className="tw-rounded-full"
            src="/icon.jpg"
            width={128}
            height={128}
            layout="responsive"
            alt="Profile picture"
          />
        </div>
      </div>
      <div className="tw-w-full md:tw-w-2/3 tw-p-2">
        <Heading size={1}>Hi, I&apos;m Mats! 👋</Heading>
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
