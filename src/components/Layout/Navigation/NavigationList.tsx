import { ButtonLoginGoogle, clsx, images, useState } from '../..';

interface NavItems {
  name: string;
  url: string;
  ariaLabel: string;
}

type NavigationListProps = {
  className?: string;
};

type NavItemsProps = {
  item: NavItems;
  index: number;
  selectedItem: string;
  setSelectedItem: (name: string) => void;
};

const list = [
  { name: 'Upload', url: '#', ariaLabel: 'Upload navigation link' },
  { name: 'Client management', url: '#', ariaLabel: 'Client management navigation link' },
  { name: 'Worker management', url: '#', ariaLabel: 'Worker management navigation link' },
  { name: 'Reports', url: '#', ariaLabel: 'Reports navigation link' },
];

const NavItems = ({ item, index, selectedItem, setSelectedItem }: NavItemsProps) => (
  <a
    key={index}
    href={item.url}
    aria-label={item.ariaLabel}
    className={clsx(item.name === selectedItem ? 'pb-4 border-b-2 border-default' : null)}
    onClick={() => setSelectedItem(item.name)}>
    <li>{item.name}</li>
  </a>
);

export const NavigationList = ({ className }: NavigationListProps) => {
  const [selectedItem, setSelectedItem] = useState('Upload');

  return (
    <nav
      className={clsx(
        className,
        'flex justify-between mx-[-16px] px-8 gap-8 pt-10 text-sm lowercase border-b border-default'
      )}>
      <a href="/">
        <img
          src={images.LogoDark}
          alt="randstad Logo"
          aria-label="randstad Logo"
          className="max-w-40 max-h-6 mt-[-8px]"
        />
      </a>
      <ul className="flex flex-grow gap-8">
        {list.map((item, index) => (
          <NavItems
            item={item}
            index={index}
            selectedItem={selectedItem}
            setSelectedItem={setSelectedItem}
          />
        ))}
      </ul>
      <ButtonLoginGoogle
        text="login with Google"
        className="self-start hidden mt-[-10px] lg:flex"
      />
    </nav>
  );
};
