import React from 'react';
import { Product } from '../api/api';
import heart from '../img/smallHeart.png';
const TotalProduct = ({ element }: { element: Product }) => {
  return (
    <div className='gridComponent' key={element.id}>
      <img className='productImage' src={element.images[0]} />
      <p className='name'>{element.name}</p>
      <p className='price'>{element.price}원</p>
      <p className='favoriteCount'>
        {' '}
        <img className='favorites' src={heart} /> {element.favoriteCount}
      </p>
    </div>
  );
};

export default TotalProduct;

