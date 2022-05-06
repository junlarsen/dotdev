import { FunctionComponent, ReactNode, ReactText } from 'react';

export type SectionProps = {
  children: ReactNode;
  title: ReactText;
};

export const Section: FunctionComponent<SectionProps> = (props) => {
  const { children, title } = props;

  return (
    <section className="tw-my-2">
      <h2 className="tw-text-lg tw-font-bold tw-mb-2">{title}</h2>
      {children}
    </section>
  );
};
