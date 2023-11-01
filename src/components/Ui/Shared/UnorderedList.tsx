import { ReactNode } from 'react';

type UnorderedListProps = {
  className?: string;
  children: ReactNode[];
};

export const UnorderedList = ({ className, children }: UnorderedListProps) => {
  return (
    <ul className={className}>
      {children.map((child, index) => (
        <li key={index} className={className}>
          {child}
        </li>
      ))}
    </ul>
  );
};
