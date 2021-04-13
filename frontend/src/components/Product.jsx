import React from 'react';
import './Product.css';
import { Link } from 'react-router-dom';

const Product = ({
  key,
  productId,
  price,
  name,
  description,
  countIntStock,
  imageUrl
}) => {
  return (
    <div className='product'>
      <img src={imageUrl} alt='' />
      <div className='product__info'>
        <p className='info__name'>{name}</p>
        <p className='info__description'>{description}</p>
        <p className='info__price'>${price}</p>
        <Link to={`/products/${productId}`} className='info__button'>
          View
        </Link>
      </div>
    </div>
  );
};

export default Product;
