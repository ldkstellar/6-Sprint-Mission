import React from 'react';
import { Product } from '../api/api';
import BestProduct from './BestProduct';
const BestProducts = ({ goodProducts }: { goodProducts: Product[] }) => {
  return (
    <div className='bestContainer'>
      <p id='title'>베스트 상품</p>
      <div className='bestList'>
        {goodProducts.map((element) => {
          return <BestProduct key={element.id} element={element} />;
        })}
      </div>
    </div>
  );
};

export default BestProducts;

