import { Page } from '../components/page/page';
import { Section } from '../components/section/section';

export default function App(): JSX.Element {
  return (
    <Page>
      <Section title="Let's get in touch!">
        <p className="tw-my-1">
          If you have any questions, please feel free to contact me, I'm always open for a chat! I'll try to get back to
          you as quickly as possible!
        </p>
        <p className="tw-my-1">
          You can always reach me on email at&nbsp;
          <a className="tw-text-primary hover:tw-text-secondary" href="mailto:me@supergrecko.com">
            me@supergrecko.com
          </a>
        </p>
        <p className="tw-my-1">
          Have an opportunity to work together? Feel free to reach out to me on email or connect with me on&nbsp;
          <a className="tw-text-primary hover:tw-text-secondary" href="pages/contact">
            LinkedIn
          </a>
          !
        </p>
      </Section>
      <Section title="Other platforms">
        <p className="tw-my-1">
          You can also find me on&nbsp;
          <a className="tw-text-primary hover:tw-text-secondary" href="https://github.com/matsjla">
            GitHub
          </a>
          &nbsp;or Discord with the tagline <code>supergrecko#3434</code>
        </p>
      </Section>
    </Page>
  );
}
