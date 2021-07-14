import { useState, useEffect } from 'react';
import ProductCard from '../components/ProductCard';
import imageNotFound from '../assets/Image-Not-Available.png';
import Search from '../components/Search';

// TODO: Limit list of product to 25
// TODO: Pagination

const Home = () => {
  const [products, setProducts] = useState([]);
  const [query, setQuery] = useState('');

  const handleQuery = ev => {
    setQuery(ev.target.value);
  };

  useEffect(() => {
    const URL = 'https://ecomerce-master.herokuapp.com/api/v1/item';
    const myAbortController = new AbortController();
    const getProducts = async () => {
      try {
        const response = await fetch(URL, { signal: myAbortController.signal });
        const products = await response.json();
        setProducts(products);
      } catch (error) {
        console.log(error);
      }
    };
    getProducts();

    return () => myAbortController.abort();
  }, []);

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
                    product.image && product.image.slice(0, 4) === 'http'
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
