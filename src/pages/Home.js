import { useState, useEffect } from 'react';
import { useGetApiData } from '../components/utilities/FetchUtils';
import ProductCard from '../components/ProductCard';
import Search from '../components/Search';
import imageNotFound from '../assets/Image-Not-Available.png';

// FIXME: Limit list of product to 25

const Home = () => {
  const products = useGetApiData(
    'https://ecomerce-master.herokuapp.com/api/v1/item',
    []
  );
  const [filtered, setFiltered] = useState([]);
  const [isSearchOn, setIsSearchOn] = useState(false);
  const [page, setPage] = useState(0);

  const searchProduct = searchQuery => {
    searchQuery ? setIsSearchOn(true) : setIsSearchOn(false);
    const result = products.filter(prod =>
      prod.product_name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFiltered(result);
  };

  const handleClickPage = e => {
    setPage(18 * Number(e.target.dataset.index));
  };

  useEffect(() => {
    setFiltered(() => products);
  }, [products]);

  return (
    <>
      <Search handleQuery={searchProduct} />

      <div className="products__container container">
        {filtered.length > 0
          ? filtered.slice(page, page + 18).map(product => {
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
      <div className="pagination__container">
        {Array.from(
          Array(Math.ceil(filtered.length / 18))
            .fill()
            .map((_, i) => 1 + i)
        ).map((el, i) => (
          <button
            id={`pagination_${i}`}
            data-index={i}
            className="pagination__item"
            onClick={handleClickPage}
            disabled={page / 18 === i}
          >
            {el}
          </button>
        ))}
      </div>
    </>
  );
};

export default Home;
