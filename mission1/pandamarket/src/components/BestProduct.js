import React from "react";
import "../style/BestProduct.css";
const BestProduct = () => {
  const rank = [1, 2, 3, 4];
  return (
    <div>
      <p>베스트 상품</p>
      <div className="bestList">
        {rank.map((e) => {
          return (
            <div className="product">
              <img alt={`이미지${e}`} />
              <p>아이패드 팝니다.</p>
              <p>500,000원</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BestProduct;

