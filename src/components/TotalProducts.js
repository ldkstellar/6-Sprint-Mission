import React, { useEffect, useState } from "react";
import { useNavigate, useNavigation, useSearchParams } from "react-router-dom";
import heart from "../img/heart.png";
import "../style/TotalProduct.css";
import OriginalTotalProduct from "./OriginalTotalProduct";
const TotalProducts = ({ totalProducts, setTotalProducts, windowWidth }) => {
  const navigation = useNavigate();
  const register = () => {
    navigation("/addItem");
  };

  let products = undefined;
  if (windowWidth < 1199 && windowWidth > 767) {
    products = totalProducts.slice(0, 6);
  } else if (windowWidth < 767) {
    products = totalProducts.slice(0, 4);
  }

  const compare = (prev, next) => {
    const prevDate = new Date(prev.createdAt).getTime();
    const nextDate = new Date(next.createdAt).getTime();
    return nextDate - prevDate;
  };

  const newOption = (e) => {
    if (e.target.value === "1") {
      const tempList = totalProducts.slice().sort(compare);
      setTotalProducts(tempList);
    } else if (e.target.value === "2") {
      console.log();
      const tempList = totalProducts.slice().sort((prev, next) => {
        return next.favoriteCount - prev.favoriteCount;
      });
      setTotalProducts(tempList);
    }
  };

  return (
    <div className="container">
      <div className="totalProduct">
        <div className="titleAndSearch">
          <p className="title">
            {windowWidth < 1999 ? "판매 중인 상품" : "전체 상품"}
          </p>
          <input
            className="search"
            placeholder="검색할 상품을 입력해주세요"
          ></input>
        </div>
        <div className="buttons">
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
        {!products &&
          totalProducts.map((element) => {
            return <OriginalTotalProduct element={element} />;
          })}

        {products?.map((element) => {
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

export default TotalProducts;

