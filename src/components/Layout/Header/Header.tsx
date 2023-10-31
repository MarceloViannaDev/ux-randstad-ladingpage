import { Navigation, WrapperFull } from '../../../components';

export const Header = () => {
  return (
    <WrapperFull className="bg-brand-senary">
      <header className="h-[80vh]">
        <Navigation />
      </header>
    </WrapperFull>
  );
};
