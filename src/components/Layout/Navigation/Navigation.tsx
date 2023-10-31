import {
  AnimatePresence,
  ButtonLoginGoogle,
  FileIcon,
  HeartIcon,
  images,
  MenuIcon,
  motion,
  MotionContainer,
  UserIcon,
  useState,
  Wrapper,
  WrapperMotionView,
  XCircleIcon,
} from '../../../components';
import { NavigationList } from './NavigationList';

export function Navigation() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <Wrapper>
      <WrapperMotionView>
        <nav className="relative">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={MotionContainer.container}
            className="py-4 px-4 items-center lg:items-start flex justify-between lg:mx-[-16px] lg:px-8 lg:gap-8 lg:pb-0 lg:pt-10 lg:text-sm lg:lowercase border-b border-default">
            <a href="/">
              <motion.img
                variants={MotionContainer.item}
                src={images.LogoDark}
                alt="randstad Logo"
                aria-label="randstad Logo"
                className="max-w-[120px] md:max-w-max lg:max-h-6 lg:mt-[-8px] z-20 relative"
              />
            </a>
            <NavigationList className="hidden lg:flex" />
            <motion.div variants={MotionContainer.item} className="flex gap-2 md:gap-4">
              <button>
                <HeartIcon />
              </button>
              <button>
                <FileIcon />
              </button>
              <button>
                <UserIcon />
              </button>
              <button onClick={toggleNav} className="lg:hidden">
                <MenuIcon />
              </button>
            </motion.div>
            <ButtonLoginGoogle
              text="login with Google"
              className="self-start hidden mt-[-10px] lg:flex"
            />
          </motion.div>
        </nav>
      </WrapperMotionView>
      <AnimatePresence>
        {isNavOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="absolute top-0 left-0 z-10 flex flex-col w-full h-screen px-4 py-4 pt-16 overflow-hidden bg-white lg:hidden">
            <Wrapper>
              <motion.div initial="hidden" animate="visible">
                <NavigationList className="flex flex-col pt-4">
                  <ButtonLoginGoogle text="login with Google" />
                </NavigationList>
              </motion.div>
              <motion.div variants={MotionContainer.item}>
                <button onClick={toggleNav}>
                  <XCircleIcon size={32} strokeWidth={1.5} className="absolute top-3 right-4" />
                </button>
              </motion.div>
            </Wrapper>
          </motion.div>
        )}
      </AnimatePresence>
    </Wrapper>
  );
}
