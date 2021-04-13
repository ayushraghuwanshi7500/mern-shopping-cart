import React from 'react';
import './CartItem.css';
import { Link } from 'react-router-dom';
const CartItem = ({
  productId,
  imageUrl,
  qty,
  name,
  price,
  qtyChangeHandler,
  removeFromCartHandler
}) => {
  return (
    <div className='cartitem'>
      <div className='cartitem__image'>
        <img src={imageUrl} alt='' />
      </div>
      <Link to={`/products/${productId}`} className='cartitem__name'>
        <p>{name}</p>
      </Link>
      <p className='cartitem__price'>${price}</p>
      <select
        className='cartitem__select'
        value={qty}
        onChange={(e) => qtyChangeHandler(productId, e.target.value)}
      >
        {[...Array(parseInt(qty)).keys()].map((x) => (
          <option value={x + 1}>{x + 1}</option>
        ))}
      </select>
      <button
        className='cartitem__deleteBtn'
        onClick={(e) => removeFromCartHandler(productId)}
      >
        <i className='fas fa-trash'></i>
      </button>
    </div>
  );
};

export default CartItem;
