import React from 'react';
import { Product } from '../api/api';

import heart from '../img/smallHeart.png';
const BestProduct = ({ product }: { product: Product }) => {
  return (
    <div className='bestProduct'>
      <img className='image' src={product.images[0]} alt='상품이미지' />
      <p className='description'>{product.description}</p>
      <p className='price'>{product.price}원</p>
      <p className='favoriteCount'>
        <img className='favorites' src={heart} /> {product.favoriteCount}
      </p>
    </div>
  );
};

export default BestProduct;

