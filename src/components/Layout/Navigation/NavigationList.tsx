import { ReactNode } from 'react';
import { MotionContainer, clsx, motion, useState } from '../..';

interface NavItems {
  name: string;
  url: string;
  ariaLabel: string;
}

type NavigationListProps = {
  className?: string;
  children?: ReactNode;
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
    className={clsx(
      'border-b lg:border-b-0 py-4 lg:py-0',
      item.name === selectedItem ? 'lg:!pb-4 lg:!border-b-2 lg:!border-default' : null
    )}
    onClick={() => setSelectedItem(item.name)}>
    <motion.li variants={MotionContainer.item}>{item.name}</motion.li>
  </a>
);

export const NavigationList = ({ className, children }: NavigationListProps) => {
  const [selectedItem, setSelectedItem] = useState('Upload');

  return (
    <>
      <motion.ul
        variants={MotionContainer.container}
        className={clsx(className, 'flex flex-grow lg:gap-8')}>
        {list.map((item, index) => (
          <NavItems
            item={item}
            index={index}
            selectedItem={selectedItem}
            setSelectedItem={setSelectedItem}
          />
        ))}
        {children && (
          <a href="#">
            <li className="py-4">{children}</li>
          </a>
        )}
      </motion.ul>
    </>
  );
};
