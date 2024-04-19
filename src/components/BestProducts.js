import React from "react";
import "../style/BestProduct.css";

import BestProduct from "./BestProduct";

const BestProducts = ({ bestProducts = [], windowWidth }) => {
  let goodProducts;
  if (windowWidth < 1199 && windowWidth > 767) {
    goodProducts = [
      ...bestProducts
        .sort((prev, next) => {
          return next.favoriteCount - prev.favoriteCount;
        })
        .slice(0, 2),
    ];
  } else if (windowWidth < 767) {
    goodProducts = [
      ...bestProducts
        .sort((prev, next) => {
          return next.favoriteCount - prev.favoriteCount;
        })
        .slice(0, 1),
    ];
  } else {
    goodProducts = [
      ...bestProducts
        .sort((prev, next) => {
          return next.favoriteCount - prev.favoriteCount;
        })
        .slice(0, 4),
    ];
  }
  return (
    <div className="bestContainer">
      <p id="title">베스트 상품</p>

      <div className="bestList">
        {goodProducts.map((element) => {
          return <BestProduct element={element} />;
        })}
      </div>
    </div>
  );
};

export default BestProducts;

