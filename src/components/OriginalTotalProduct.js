import React from "react";
import heart from "../img/heart.png";
const OriginalTotalProduct = ({ element }) => {
  return (
    <div className="product" key={element.id}>
      <img src={element.images[0]} />
      <p className="name">{element.name}</p>
      <p className="price">{element.price}원</p>
      <p className="favoriteCount">
        {" "}
        <img className="favorites" src={heart} /> {element.favoriteCount}
      </p>
    </div>
  );
};

export default OriginalTotalProduct;

