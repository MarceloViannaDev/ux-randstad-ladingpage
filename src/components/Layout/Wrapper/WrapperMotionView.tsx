import { motion } from '../../../components';

type MotionViewProps = {
  children: React.ReactNode;
};

export const WrapperMotionView = ({ children }: MotionViewProps) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      animate={{ opacity: [0, 1, 0] }}
      transition={{ duration: 2 }}>
      {children}
    </motion.div>
  );
};
