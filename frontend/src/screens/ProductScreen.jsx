import React from 'react';
import './ProductScreen.css';
const ProductScreen = () => {
  return (
    <div className='productscreen'>
      <div className='productscreen__left'>
        <div className='left__image'>
          <img
            src='https://images.unsplash.com/photo-1605787020600-b9ebd5df1d07?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1463&q=80'
            alt=''
          />
        </div>
        <div className='left__info'>
          <p className='left__name'>I Phone 12</p>
          <p className='left__price'>$1190</p>
          <p className='left__description'>
            Welcome to a new era of iPhone. Beautifully bright 6.1-inch Super
            Retina XDR display.1 Ceramic Shield with 4x better drop
            performance.2 Incredible low-light photography with Night mode on
            all cameras. Cinema-grade Dolby Vision video recording, editing, and
            playback. Powerful A14 Bionic chip. And new MagSafe accessories for
            easy attach and faster wireless charging.3 Let the fun begin.
          </p>
        </div>
      </div>
      <div className='proctscreen__right'>
        <div className='right__info'>
          <p>
            Price: <span>$1190</span>
          </p>
          <p>
            Status: <span> In Stock</span>
          </p>
          <p>
            Quantity
            <select>
              <option value='1'>1</option>
              <option value='2'>2</option>
              <option value='3'>3</option>
              <option value='4'>4</option>
            </select>
          </p>
          <p>
            <button type='button'>Add To Cart</button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductScreen;
