import { useState, useEffect } from 'react';
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
  const [filtered, setFiltered] = useState([]);
  const [isSearchOn, setIsSearchOn] = useState(false);

  /*   const handleQuery = ev => {
    setQuery(ev.target.value);
  }; */

  const searchProduct = searchQuery => {
    searchQuery ? setIsSearchOn(true) : setIsSearchOn(false);
    const result = products.filter(prod =>
      prod.product_name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFiltered(result);
  };

  useEffect(() => {
    setFiltered(() => products);
  }, [products]);

  return (
    <>
      <Search handleQuery={searchProduct} />

      <div className="products__container container">
        {filtered.length > 0
          ? filtered.map(product => {
              return (
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
              );
            })
          : filtered.length === 0 && isSearchOn
          ? 'Not found'
          : 'Loading'}
      </div>
    </>
  );
};

export default Home;
