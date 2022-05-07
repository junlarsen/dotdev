import { Page } from '../components/layouts/page';
import { Heading } from '../components/typography/heading';
import { Paragraph } from '../components/typography/paragraph';

export default function App(): JSX.Element {
  return (
    <Page>
      <div className="tw-w-full md:tw-w-1/3 tw-p-2">
        <div className="tw-w-full tw-h-full">
          <img className="tw-w-full tw-object-contain" src="/favicon.png" alt="logo" />
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
            <a className="tw-text-primary hover:tw-text-secondary" href="https://ntnu.edu/">
              NTNU
            </a>
            , working part-time as a frontend developer. I&apos;m also a core contributor to the&nbsp;
            <a className="tw-text-primary hover:tw-text-secondary" href="https://godbolt.org">
              Compiler Explorer
            </a>
            &nbsp;project.
          </Paragraph>
        </div>
      </div>
    </Page>
  );
}
