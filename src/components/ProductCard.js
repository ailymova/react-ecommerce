import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { containerVariants } from '../config/animationVariants';
import './ProductCard.scss';

const ProductCard = ({
  productImage,
  productName,
  productBrand,
  productPrice,
  productId,
}) => {
  return (
    <motion.div
      className="product__card"
      id={productId}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <Link to={`/${productId}`}>
        <img src={productImage} alt={productName} className="product__image" />
        <h3 className="product__title">{productName}</h3>
      </Link>

      <p className="product__brand">{productBrand}</p>
      <span className="product__price">$ {productPrice}</span>
    </motion.div>
  );
};

export default ProductCard;
