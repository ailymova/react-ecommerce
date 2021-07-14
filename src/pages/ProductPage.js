import React from 'react';
import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import imageNotFound from '../assets/Image-Not-Available.png';
import '../sass/pages.scss';

const ProductPage = () => {
  const { id } = useParams();

  const [product, setProduct] = useState();

  useEffect(() => {
    const URL = 'https://ecomerce-master.herokuapp.com/api/v1/item/';
    const myAbortController = new AbortController();
    const getProduct = async () => {
      try {
        const response = await fetch(`${URL}${id}`, {
          signal: myAbortController.signal,
        });
        const product = await response.json();
        setProduct(product);
      } catch (error) {
        console.log(error);
      }
    };
    getProduct();

    return () => myAbortController.abort();
  }, [id]);

  return (
    <div className="container">
      {product ? (
        <>
          <div className="col-50">
            <img
              src={!product.image ? imageNotFound : product.image}
              alt={product.product_name}
            />
          </div>
          <div className="col-50 single-prod__info">
            <span className="breadcrumbs">
              <Link to="/">Home</Link> {`>`} {product.product_name}
            </span>
            <h1>{product.product_name}</h1>
            <h3>{!product.brand ? 'GENERIC' : product.brand}</h3>
            <p>{product.description}</p>
            <p>Category: {product.category}</p>
            <p>SKU: {product.sku}</p>
            <h2>$ {product.price}.00</h2>
            <div style={{ display: 'flex' }}>
              <p className="col-50">Quantiy components</p>
              <button disabled={true}>Login to purchase</button>
            </div>
          </div>
        </>
      ) : (
        'Loading'
      )}
    </div>
  );
};

export default ProductPage;
