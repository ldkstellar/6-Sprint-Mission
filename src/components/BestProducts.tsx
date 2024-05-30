import React from 'react';
import { Product } from '../api/api';
import BestProduct from './BestProduct';
const BestProducts = ({ products: Products }: { products: Product[] }) => {
  return (
    <div className='bestContainer'>
      <p id='title'>베스트 상품</p>
      <div className='bestList'>
        {Products.map((element) => {
          return <BestProduct key={element.id} product={element} />;
        })}
      </div>
    </div>
  );
};

export default BestProducts;

