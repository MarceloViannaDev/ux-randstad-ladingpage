import { Hero, Navigation, WrapperFull } from '../../../components';

export const Header = () => {
  return (
    <header>
      <WrapperFull className="section--hero-bg-gradient">
        <Navigation />
        <Hero />
      </WrapperFull>
    </header>
  );
};
