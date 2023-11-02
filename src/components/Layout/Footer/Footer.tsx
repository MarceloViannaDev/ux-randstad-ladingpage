import {
  Balancer,
  UnorderedList,
  Wrapper,
  WrapperFull,
  WrapperMotionView,
} from '../../../components';

const footerLinkHover = 'hover:-text--color-white-alpha-50';
const footerRights =
  'randstad solutions limited, is a limited company registered in england and wales with registered number 02389033. our registered office is at 450 capability green. luton, bedfordshire, lu1 3lu. randstad, home human forward and shaping the world of work are registered trademarks of randstad n.v. © randstad n.v. 2021';

export const Footer = () => {
  return (
    <WrapperFull className="bg-brand-secondary">
      <Wrapper>
        <WrapperMotionView>
          <footer className="flex flex-col gap-8 py-16 lowercase xl:gap-4 text-brand-tertiary">
            <div className="flex flex-col gap-2">
              <h2>Randstad Import Pipeline</h2>
              <UnorderedList className="flex gap-4 text-sm -text--color-white-alpha-30">
                {['Home', 'About', 'Contact', 'Privacy', 'Terms'].map((text, index) => (
                  <a key={index} href="#" className={footerLinkHover}>
                    {text}
                  </a>
                ))}
              </UnorderedList>
            </div>
            <UnorderedList className="flex flex-col gap-4 text-sm lg:flex-row -text--color-white-alpha-30">
              {[
                'Terms & Conditions',
                'Contact Us',
                'Cookies',
                'Privacy Notice',
                'Intellectual Property',
                'Site Map',
              ].map((text, index) => (
                <a key={index} href="#" className={footerLinkHover}>
                  {text}
                </a>
              ))}
            </UnorderedList>
            <p className="pt-8 text-xs border-t -border-t--color-white-alpha-30 -text--color-white-alpha-30">
              <Balancer>{footerRights}</Balancer>
            </p>
          </footer>
        </WrapperMotionView>
      </Wrapper>
    </WrapperFull>
  );
};
