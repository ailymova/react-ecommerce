import './Skeleton.scss';

const SkeletonElement = ({ type }) => {
  const classes = `skeletons ${type}`;

  return <div className={classes}></div>;
};

export default SkeletonElement;
