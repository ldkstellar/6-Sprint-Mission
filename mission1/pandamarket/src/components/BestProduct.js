import React from "react";
import "../style/BestProduct.css";
import heart from "./../img/heart.png";
const BestProduct = ({ value = [] }) => {
  const list = value
    .slice()
    .sort((next, prev) => {
      return prev.favoriteCount - next.favoriteCount;
    })
    .slice(0, 4);
  console.log(value);
  return (
    <div>
      <p id="title">베스트 상품</p>
      <div className="bestList">
        {list.map((element, i) => {
          return (
            <div key={i} className="product">
              <img src={element.images} alt={`이미지$}`} />
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

