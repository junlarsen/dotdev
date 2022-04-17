import { Page } from '../components/page/page';
import { Section } from '../components/section/section';

export default function App(): JSX.Element {
  return (
    <Page>
      <Section title="A little about me..">
        <p className="tw-my-1">
          I'm currently studying computer science at&nbsp;
          <a className="tw-text-primary hover:tw-text-secondary" href="https://www.ntnu.edu/">
            NTNU
          </a>
          , working part-time as a frontend developer at&nbsp;
          <a className="tw-text-primary hover:tw-text-secondary" href="https://consigli.no/">
            Consigli AS
          </a>
          . I'm also a core contributor to the&nbsp;
          <a className="tw-text-primary hover:tw-text-secondary" href="https://godbolt.org">
            Compiler Explorer
          </a>
          &nbsp;project.
        </p>
      </Section>
    </Page>
  );
}
