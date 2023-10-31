import { Navigation } from '../../index.ts';

export const Header = () => {
  return (
    <header className="h-[80vh]">
      <Navigation className="hidden lg:flex" />
    </header>
  );
};
