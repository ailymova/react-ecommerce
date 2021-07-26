import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useGetApiData } from '../components/utilities/FetchUtils';
import SkeletonProductCard from '../components/skeletons/SkeletonProductCard';
import ProductCard from '../components/ProductCard';
import Search from '../components/Search';
import imageNotFound from '../assets/Image-Not-Available.png';
import { containerVariants } from '../config/animationVariants';

// TODO: Column filter

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
    setPage(0);
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

      <motion.div
        className="products__container container"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
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
          ? 'Not found' // TODO:
          : [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(n => (
              <SkeletonProductCard key={n} />
            ))}
      </motion.div>
      <div className="pagination__container">
        {filtered.length > 18
          ? Array.from(
              Array(Math.ceil(filtered.length / 18))
                .fill()
                .map((_, i) => 1 + i)
            ).map((el, i) => (
              <button
                key={i}
                id={`pagination_${i}`}
                data-index={i}
                className="pagination__item"
                onClick={handleClickPage}
                disabled={page / 18 === i}
              >
                {el}
              </button>
            ))
          : ''}
      </div>
    </>
  );
};

export default Home;
