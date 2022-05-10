import { Page } from '../components/layouts/page';
import Image from 'next/image';

export default function App(): JSX.Element {
  return (
    <Page>
      <section className="tw-w-full">
        <Image src="/undraw_web_development.png" alt="Under construction" width={1105} height={845} layout="responsive" />
        <header className="tw-text-center tw-text-4xl tw-font-bold">
          <h1>Under construction</h1>
        </header>
      </section>
    </Page>
  );
}
