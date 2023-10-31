import { ReactNode } from 'react';

interface SectionProps {
  children: ReactNode;
}

export const Section = ({ children }: SectionProps) => {
  return (
    <section className="w-full">
      <div className="container mx-auto w-[90%] max-w-[1120px]">{children}</div>
    </section>
  );
};
