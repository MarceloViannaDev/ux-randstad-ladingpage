import {
  AnimatePresence,
  ButtonLoginGoogle,
  motion,
  MotionContainer,
  useState,
  Wrapper,
  WrapperMotionView,
} from '../../../components';
import { FileIcon, HeartIcon, MenuIcon, UserIcon, XCircleIcon } from '../../Ui/Icons/Icons';
import { Images } from '../../Ui/Images/Images';
import { NavigationList } from './NavigationList';

export const Navigation = () => {
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
            className="py-4 items-center xl:items-start flex justify-between xl:mx-[-16px] xl:px-8 xl:gap-8 xl:pb-0 xl:pt-10 xl:text-sm xl:lowercase border-b border-default">
            <a href="/">
              <motion.img
                variants={MotionContainer.item}
                src={Images.LogoDark}
                alt="randstad Logo"
                aria-label="randstad Logo"
                className="max-w-[120px] md:max-w-max xl:max-h-6 xl:mt-[-8px] z-20 relative"
              />
            </a>
            <NavigationList className="hidden xl:flex" />
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
              <button onClick={toggleNav} className="xl:hidden">
                <MenuIcon />
              </button>
            </motion.div>
            <ButtonLoginGoogle
              text="login with Google"
              className="self-start hidden mt-[-10px] xl:flex"
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
            className="absolute top-0 left-0 z-10 flex flex-col w-full h-screen py-4 pt-16 overflow-hidden bg-white xl:hidden">
            <Wrapper>
              <motion.div initial="hidden" animate="visible">
                <NavigationList className="flex flex-col pt-4">
                  <ButtonLoginGoogle text="login with Google" />
                </NavigationList>
              </motion.div>
              <motion.div variants={MotionContainer.item}>
                <button onClick={toggleNav}>
                  <XCircleIcon
                    size={32}
                    strokeWidth={1.5}
                    className="absolute top-3 right-3 md:right-8"
                  />
                </button>
              </motion.div>
            </Wrapper>
          </motion.div>
        )}
      </AnimatePresence>
    </Wrapper>
  );
};
