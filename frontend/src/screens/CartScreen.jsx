import React from 'react';
import './CartScreen.css';
import CartItem from '../components/CartItem';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart, removeFromCart } from '../redux/actions/cartActions';
const CartScreen = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  console.log(cart);

  const { cartItems } = cart;
  console.log(cartItems);
  const qtyChangeHandler = (id, qty) => {
    dispatch(addToCart(id, qty));
  };
  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id));
  };

  const getCartCount = () => {
    return cartItems.reduce((qty, item) => Number(item.qty) + qty, 0);
  };

  const getCartPriceCount = () => {
    return cartItems.reduce(
      (price, item) => item.price * Number(item.qty) + price,
      0
    );
  };
  return (
    <div className='cartscreen'>
      <div className='cartscreen__left'>
        <h2>Shopping Cart</h2>
        {cartItems.length === 0 ? (
          <h1>Cart is Empty</h1>
        ) : (
          cartItems.map((item) => (
            <CartItem
              key={item.product}
              productId={item.product}
              name={item.name}
              price={item.price}
              imageUrl={item.imageUrl}
              qty={item.qty}
              qtyChangeHandler={qtyChangeHandler}
              removeFromCartHandler={removeFromCartHandler}
            />
          ))
        )}
      </div>
      <div className='cartscreen__right'>
        <div className='cartscreen__info'>
          <p>SubTotal ({getCartCount()}) items</p>
          <p>${getCartPriceCount()}</p>
        </div>
        <div>
          <button>Proceed to checkout</button>
        </div>
      </div>
    </div>
  );
};

export default CartScreen;
