import Shimmer from './Shimmer';
import SkeletonElement from './SkeletonElement';
import { motion } from 'framer-motion';
import { containerVariants } from '../../config/animationVariants';

const SkeletonProductCard = () => {
  return (
    <motion.div
      className="skeletons__wrapper"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <div className="skeletons__productCard">
        <SkeletonElement type="img" />
        <SkeletonElement type="titleCenter" />
        <SkeletonElement type="text" />
        <SkeletonElement type="pill" />
      </div>
      <Shimmer />
    </motion.div>
  );
};

export default SkeletonProductCard;
