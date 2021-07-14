import './ProductCard.scss';
import { Link } from 'react-router-dom';

const ProductCard = ({
  productImage,
  productName,
  productBrand,
  productPrice,
  productId,
}) => {
  return (
    <div className="product__card" id={productId}>
      <Link to={`/${productId}`}>
        <img src={productImage} alt={productName} className="product__image" />
        <h3 className="product__title">{productName}</h3>
      </Link>

      <p className="product__brand">{productBrand}</p>
      <span className="product__price">$ {productPrice}</span>
    </div>
  );
};

export default ProductCard;
