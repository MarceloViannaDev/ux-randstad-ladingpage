import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface WrapperProps {
  children: ReactNode;
}

export const Wrapper = ({ children }: WrapperProps) => {
  return (
    <div className="w-full">
      <div className="container mx-auto w-[98%] md:w-[95%] lg:w-[90%] max-w-[1280px]">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          animate={{ opacity: [0, 1, 0] }}
          transition={{ duration: 2 }}>
          {children}
        </motion.div>
      </div>
    </div>
  );
};
