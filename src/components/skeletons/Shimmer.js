import { motion } from 'framer-motion';

const Shimmer = () => {
  return (
    <motion.div
      initial={{ x: '-150%' }}
      animate={{ x: '150%' }}
      transition={{ repeat: Infinity, duration: 1.5 }}
      className="shimmer__wrapper"
    >
      <div className="shimmer"></div>
    </motion.div>
  );
};

export default Shimmer;
