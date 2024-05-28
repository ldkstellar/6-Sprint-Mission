import React from 'react';
import moreImg from '../img/moreBtn.png';
import mediumHeart from '../img/mediumHeart.png';
import { Product } from '../api/api';
import style from '../style/ProductIntroduce.module.css';
const ProductIntroduce = ({ specificItem }: { specificItem: Product }) => {
  return (
    <div className={style['productContainer']}>
      <img id='itemImage' src={specificItem.images[0]} alt='물품상세이미지' />
      <div className={style['informationContainer']}>
        <div className={style['info']}>
          <div>
            <p className={style['titleInfo']}>{specificItem.name}</p>
            <p className={style['priceInfo']}>{specificItem.price}원</p>
          </div>
          <button className={style['moreBtn']}>
            <img src={moreImg} alt='더보기버튼' />
          </button>
        </div>

        <div className={style['introduceContainer']}>
          <p className={style['introduce']}>상품 소개</p>
          {specificItem?.description}
        </div>

        <div className={style['tagContainer']}>
          <p className={style['tagInfo']}>상품태그</p>
        </div>

        <div className={style['likeContainer']}>
          <button className={style['likeBtn']}>
            <img className={style['likeImg']} src={mediumHeart} />
          </button>
          {specificItem.favoriteCount}
        </div>
      </div>
    </div>
  );
};
export default ProductIntroduce;

