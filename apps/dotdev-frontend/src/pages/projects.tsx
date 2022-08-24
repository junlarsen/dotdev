import { Page } from '../templates/page';
import Image from 'next/image';
import Head from 'next/head';
import { Headline } from '../atoms/typography/headline';
import { css } from '../stitches';

export default function App(): JSX.Element {
  return (
    <Page>
      <Head>
        <title>Projects | Jun&apos;s Crusty Corner</title>
        <meta name="description" content="This webpage is under construction, please check back at a later time!" />
      </Head>
      <section className={containerStyles()}>
        <Image
          src="/undraw_web_development.png"
          alt="Under construction"
          width={1105}
          height={845}
          layout="responsive"
        />
        <header className={headerStyles()}>
          <Headline>Under construction</Headline>
        </header>
      </section>
    </Page>
  );
}

const containerStyles = css({
  width: '100%'
})

const headerStyles = css({
  textAlign: 'center',
})
