import SkeletonElement from './SkeletonElement';

const SkeletonProductCard = () => {
  return (
    <div className="skeleton__wrapper">
      <div className="skeleton__productCard">
        <SkeletonElement type="img" />
        <SkeletonElement type="titleCenter" />
        <SkeletonElement type="text" />
        <SkeletonElement type="pill" />
      </div>
    </div>
  );
};

export default SkeletonProductCard;
