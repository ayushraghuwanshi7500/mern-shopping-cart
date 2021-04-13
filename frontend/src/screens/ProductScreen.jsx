import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// actions

import { getProductDetails } from '../redux/actions/productActions';
import { addToCart } from '../redux/actions/cartActions';
import './ProductScreen.css';
const ProductScreen = ({ match, history }) => {
  const [qty, setQty] = useState(1);

  const dispatch = useDispatch();
  const productDetails = useSelector((state) => state.getProductDetails);
  const { loading, error, product } = productDetails;
  console.log(match);
  console.log(match.params);
  console.log(match.params.id);
  useEffect(() => {
    if (product && match.params.id !== product._id) {
      dispatch(getProductDetails(match.params.id));
    }
  }, [dispatch, product, match]);
  const handleAddToCart = () => {
    dispatch(addToCart(product._id, qty));
    history.push('/cart');
  };
  return loading ? (
    <h4>Loading....</h4>
  ) : error ? (
    <h4>{error}</h4>
  ) : (
    <div className='productscreen'>
      <div className='productscreen__left'>
        <div className='left__image'>
          <img src={product.imageUrl} alt='' />
        </div>
        <div className='left__info'>
          <p className='left__name'>{product.name}</p>
          <p className='left__price'>${product.price}</p>
          <p className='left__description'>{product.description}</p>
        </div>
      </div>
      <div className='proctscreen__right'>
        <div className='right__info'>
          <p>
            Price: <span>${product.price}</span>
          </p>
          <p>
            Status:
            {product.countInStock > 0 ? (
              <span> In Stock</span>
            ) : (
              <span> Out of Stock</span>
            )}
          </p>
          <p>
            Quantity
            <select value={qty} onChange={(e) => setQty(e.target.value)}>
              {[...Array(product.countInStock).keys()].map((i) => (
                <option key={i + 1} value={i + 1}>
                  {i + 1}
                </option>
              ))}
            </select>
          </p>
          <p>
            <button type='button' onClick={handleAddToCart}>
              Add To Cart
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductScreen;
