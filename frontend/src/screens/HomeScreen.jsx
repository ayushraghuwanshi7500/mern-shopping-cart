import React, { useEffect } from 'react';
import './HomeScreen.css';
import Product from '../components/Product';
import { useSelector, useDispatch } from 'react-redux';
import { getProducts as listProducts } from '../redux/actions/productActions';
const HomeScreen = () => {
  const dispatch = useDispatch();
  const getProducts = useSelector((state) => state.getProducts);
  console.log(getProducts);

  const { products, loading, error } = getProducts;
  console.log(products);
  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  return (
    <div className='homescreen'>
      <h2 className='homescreen__title'>Latest Products</h2>
      <div className='homescreen__products'>
        {loading ? (
          <h4>Loading...</h4>
        ) : error ? (
          <h4>{error}</h4>
        ) : (
          products.map((product) => (
            <Product
              key={product._id}
              productId={product._id}
              countInStock={product.countInStock}
              description={product.description}
              imageUrl={product.imageUrl}
              name={product.name}
              price={product.price}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default HomeScreen;
