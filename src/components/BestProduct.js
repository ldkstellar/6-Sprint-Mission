import React from "react";
import "../style/BestProduct.css";
import heart from "../img/heart.png";
import { useState, useEffect } from "react";
const BestProduct = ({ value = [], windowWidth }) => {
  let list;
  if (windowWidth < 1199 && windowWidth > 767) {
    list = value
      .slice()
      .sort((prev, next) => {
        return next.favoriteCount - prev.favoriteCount;
      })
      .slice(0, 2);
  } else if (windowWidth < 767) {
    list = value
      .slice()
      .sort((prev, next) => {
        return next.favoriteCount - prev.favoriteCount;
      })
      .slice(0, 1);
  } else {
    list = value
      .slice()
      .sort((prev, next) => {
        return next.favoriteCount - prev.favoriteCount;
      })
      .slice(0, 4);
  }
  return (
    <div className="container">
      <p id="title">베스트 상품</p>
      <div className="bestList">
        {list.map((element, i) => {
          return (
            <div key={i} className="product">
              <img className="image" src={element.images} alt={`이미지`} />
              <p className="description">{element.description}</p>
              <p className="price">{element.price}원</p>
              <p className="favoriteCount">
                <img className="favorites" src={heart} />{" "}
                {element.favoriteCount}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BestProduct;

