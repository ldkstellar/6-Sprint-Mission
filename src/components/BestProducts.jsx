import React from 'react';
import BestProduct from './BestProduct';
const BestProducts = ({ goodProducts }) => {
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

