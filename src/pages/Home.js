import { useState } from 'react';
import { useGetApiData } from '../components/utilities/FetchUtils';
import ProductCard from '../components/ProductCard';
import Search from '../components/Search';
import imageNotFound from '../assets/Image-Not-Available.png';

// TODO: Limit list of product to 25
// TODO: Pagination

const Home = () => {
  const products = useGetApiData(
    'https://ecomerce-master.herokuapp.com/api/v1/item',
    []
  );
  const [query, setQuery] = useState('');

  const handleQuery = ev => {
    setQuery(ev.target.value);
  };

  return (
    <>
      <Search query={query} handleQuery={handleQuery} />

      <div className="products__container container">
        {products.length > 0
          ? products
              .filter(prod =>
                prod.product_name.toLowerCase().includes(query.toLowerCase())
              )
              .map(product => (
                <ProductCard
                  key={product._id}
                  productImage={
                    product.image && product.image.search(/jpe?g|png/g) > 0
                      ? product.image
                      : product.images || imageNotFound
                  }
                  productName={product.product_name}
                  productBrand={!product.brand ? 'GENERIC' : product.brand}
                  productPrice={!product.price ? '100' : product.price}
                  productId={product._id}
                />
              ))
          : 'Loading...!'}
      </div>
    </>
  );
};

export default Home;
