import { useContext } from 'react';
import { useParams, Link } from 'react-router-dom';
import Button from '../components/Button';
import { useGetApiData } from '../components/utilities/FetchUtils';
import { UserContext } from '../context/UserContext';
import imageNotFound from '../assets/Image-Not-Available.png';
import '../sass/pages.scss';

const ProductPage = () => {
  const { id } = useParams();
  const product = useGetApiData(
    `https://ecomerce-master.herokuapp.com/api/v1/item/${id}`,
    null
  );

  const { user } = useContext(UserContext);

  return (
    <div className="container">
      {product ? (
        <>
          <div className="col-50">
            <img
              className="single-prod__img"
              src={
                product.image && product.image.search(/jpe?g|png/g) > 0
                  ? product.image
                  : product.images || imageNotFound
              }
              alt={product.product_name}
            />
          </div>
          <div className="col-50 single-prod__info">
            <span className="breadcrumbs">
              <Link to="/">Home</Link> {`>`} {product.product_name}
            </span>
            <h1 className="title">{product.product_name}</h1>
            <h3 className="brand">
              {!product.brand ? 'GENERIC' : product.brand}
            </h3>
            <p className="description">{product.description}</p>
            <p className="meta">
              <span>Category:</span> {product.category}
            </p>
            <p className="meta">
              <span>SKU:</span> {product.sku}
            </p>

            <div style={{ display: 'flex' }}>
              <p className="col-50">Quantiy components</p>
              <h2 className="price">$ {product.price}.00</h2>
            </div>
            <Button styleClass="btn--full" disabled={user ? false : true}>
              {user ? 'Add to cart' : 'Login to purchase'}
            </Button>
          </div>
        </>
      ) : (
        'Loading'
      )}
    </div>
  );
};

export default ProductPage;
