import { Page } from '../components/layouts/page';

export default function App(): JSX.Element {
  return (
    <Page>
      <div className="tw-w-full md:tw-w-1/3 tw-p-2">
        <div className="tw-w-full tw-h-full">
          <img className="tw-w-full tw-object-contain" src="/favicon.png" alt="logo" />
        </div>
      </div>
      <div className="tw-w-full md:tw-w-2/3 tw-p-2">
        <h1 className="tw-text-4xl">Hi, I&apos;m Mats! 👋</h1>
        <div className="tw-mb-6">
          <p>
            I&apos;m a developer and student based in Trondheim, Norway with a passion for building things that people
            love. I love to explore new things, work on free open-source software, and cook food.
          </p>

          <p className="tw-my-1">
            I&apos;m currently studying computer science at&nbsp;
            <a className="tw-text-primary hover:tw-text-secondary" href="http://ntnu.edu/">
              NTNU
            </a>
            , working part-time as a frontend developer. I&apos;m also a core contributor to the&nbsp;
            <a className="tw-text-primary hover:tw-text-secondary" href="https://godbolt.org">
              Compiler Explorer
            </a>
            &nbsp;project.
          </p>
        </div>
      </div>
    </Page>
  );
}
