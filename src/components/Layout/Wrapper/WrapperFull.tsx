import clsx from 'clsx';
import { ReactNode } from 'react';

interface WrapperPropsFull {
  children: ReactNode;
  className?: string;
}

export const WrapperFull = ({ children, className }: WrapperPropsFull) => {
  return <div className={clsx(className, 'min-w-full')}>{children}</div>;
};
