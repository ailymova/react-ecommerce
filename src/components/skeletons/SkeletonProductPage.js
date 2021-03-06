import Shimmer from './Shimmer';
import SkeletonElement from './SkeletonElement';

const SkeletonProductPage = () => {
  return (
    <div className="container skeletons__wrapper">
      <div className="col-50">
        <SkeletonElement type="img" />
      </div>
      <div className="col-50 skeletons__info">
        <div className="skeletons__container">
          <SkeletonElement type="meta" />
        </div>
        <SkeletonElement type="title" />
        <SkeletonElement type="subtitle" />
        <SkeletonElement type="text" />
        <SkeletonElement type="text" />
        <SkeletonElement type="text" />
        <div className="skeletons__container">
          <SkeletonElement type="meta" />
          <SkeletonElement type="meta" />
        </div>
        <SkeletonElement type="button" />
      </div>
      <Shimmer />
    </div>
  );
};

export default SkeletonProductPage;
