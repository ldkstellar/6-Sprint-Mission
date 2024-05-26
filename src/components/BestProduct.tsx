import React from 'react';
import { Product } from '../api/api';

import heart from '../img/smallHeart.png';
const BestProduct = ({ element }: { element: Product }) => {
  return (
    <div className='bestProduct'>
      <img className='image' src={element.images[0]} alt={`이미지`} />
      <p className='description'>{element.description}</p>
      <p className='price'>{element.price}원</p>
      <p className='favoriteCount'>
        <img className='favorites' src={heart} /> {element.favoriteCount}
      </p>
    </div>
  );
};

export default BestProduct;

