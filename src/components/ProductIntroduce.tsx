import React from 'react';
import moreImg from '../img/moreBtn.png';
import mediumHeart from '../img/mediumHeart.png';
import { Product } from '../api/api';
const ProductIntroduce = ({ specificItem }: { specificItem: Product }) => {
  return (
    <div className='productContainer'>
      <img id='itemImage' src={specificItem.images[0]} alt='물품상세이미지' />
      <div className='informationContainer'>
        <div className='info'>
          <div>
            <p className='titleInfo'>{specificItem.name}</p>
            <p className='priceInfo'>{specificItem.price}원</p>
          </div>
          <button className='moreBtn'>
            <img src={moreImg} alt='더보기버튼' />
          </button>
        </div>

        <div className='introduceContainer'>
          <p className='introduce'>상품 소개</p>
          {specificItem?.description}
        </div>

        <div className='tagContainer'>
          <p className='tagInfo'>상품태그</p>
        </div>

        <div className='likeContainer'>
          <button className='likeBtn'>
            <img className='likeImg' src={mediumHeart} />
          </button>
          {specificItem.favoriteCount}
        </div>
      </div>
    </div>
  );
};
export default ProductIntroduce;

