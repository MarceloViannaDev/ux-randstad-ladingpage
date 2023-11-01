import { ReactNode } from 'react';

interface WrapperProps {
  children: ReactNode;
}

export const Wrapper = ({ children }: WrapperProps) => {
  return (
    <div className="w-full">
      <div className="container mx-auto w-[90%] max-w-[1280px]">{children}</div>
    </div>
  );
};
