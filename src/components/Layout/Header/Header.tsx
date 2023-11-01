import { Hero, Navigation, WrapperFull } from '../../../components';

export const Header = () => {
  return (
    <WrapperFull className="section--hero-bg-gradient">
      <header>
        <Navigation />
        <Hero />
      </header>
    </WrapperFull>
  );
};
