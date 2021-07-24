import Shimmer from './Shimmer';
import SkeletonElement from './SkeletonElement';

const SkeletonProductCard = () => {
  return (
    <div className="skeletons__wrapper">
      <div className="skeletons__productCard">
        <SkeletonElement type="img" />
        <SkeletonElement type="titleCenter" />
        <SkeletonElement type="text" />
        <SkeletonElement type="pill" />
      </div>
      <Shimmer />
    </div>
  );
};

export default SkeletonProductCard;
