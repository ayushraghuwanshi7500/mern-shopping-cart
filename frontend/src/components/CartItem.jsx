import React from 'react';
import './CartItem.css';
import { Link } from 'react-router-dom';
const CartItem = () => {
  return (
    <div className='cartitem'>
      <div className='cartitem__image'>
        <img
          src='https://images.unsplash.com/photo-1605787020600-b9ebd5df1d07?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1463&q=80'
          alt=''
        />
      </div>
      <Link to={`/products/${1111}`} className='cartitem__name'>
        <p>I Phone 12</p>
      </Link>
      <p className='cartitem__price'>$1190</p>
      <select className='cartitem__select'>
        <option value='1'>1</option>
        <option value='2'>2</option>
        <option value='3'>3</option>
        <option value='4'>4</option>
      </select>
      <button className='cartitem__deleteBtn'>
        <i className='fas fa-trash'></i>
      </button>
    </div>
  );
};

export default CartItem;
