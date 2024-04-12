import React, { useEffect, useState } from "react";
import { useNavigate, useNavigation, useSearchParams } from "react-router-dom";
import heart from "./../img/heart.png";
import "../style/TotalProduct.css";
const TotalProduct = ({ value, setValue }) => {
  const navigation = useNavigate();
  const register = () => {
    navigation("/addItem");
  };
  const compare = (prev, next) => {
    const prevDate = new Date(prev.createdAt).getTime();
    const nextDate = new Date(next.createdAt).getTime();
    return nextDate - prevDate;
  };
  const newOption = (e) => {
    if (e.target.value === "1") {
      const tempList = value.slice().sort(compare);
      setValue(tempList);
    } else if (e.target.value === "2") {
      console.log();
      const tempList = value.slice().sort((prev, next) => {
        return next.favoriteCount - prev.favoriteCount;
      });
      setValue(tempList);
    }
  };

  return (
    <div>
      <div className="totalProduct">
        <p className="title">전체 상품</p>
        <div className="buttons">
          <input
            className="search"
            placeholder="검색할 상품을 입력해주세요"
          ></input>
          <button onClick={register} className="submit">
            상품 등록하기
          </button>
          <select onChange={newOption} className="filter">
            <option value={"1"}>최신순</option>
            <option value={"2"}>좋아요순</option>
          </select>
        </div>
      </div>
      <div className="productList">
        {value.map((element) => {
          return (
            <div className="product" key={element.id}>
              <img src={element.images[0]} />
              <p className="name">{element.name}</p>
              <p className="price">{element.price}원</p>
              <p className="favoriteCount">
                {" "}
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

export default TotalProduct;

