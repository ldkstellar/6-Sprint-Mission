import React from "react";
import { useNavigate } from "react-router-dom";
import "../style/TotalProduct.css";
import TotalProduct from "./TotalProduct";
const TotalProducts = ({
  totalProducts,
  windowWidth,
  setOrderBy,
  selectValue,
  setSelectValue,
}) => {
  const navigation = useNavigate();

  const registerClick = () => {
    navigation("/addItem");
  };
  let products = undefined;
  if (windowWidth < 1199 && windowWidth > 767) {
    products = totalProducts.slice(0, 6);
  } else if (windowWidth < 767) {
    products = totalProducts.slice(0, 4);
  }

  const newOption = (e) => {
    if (e.target.value === "1") {
      setSelectValue("1");
      setOrderBy("recent");
    } else if (e.target.value === "2") {
      setSelectValue("2");
      setOrderBy("favorite");
    }
  };

  return (
    <div className="totalProductContainer">
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
          <button onClick={registerClick} className="submit">
            상품 등록하기
          </button>
          <select onChange={newOption} value={selectValue} className="filter">
            <option value={"1"}>최신순</option>
            <option value={"2"}>좋아요순</option>
          </select>
        </div>
      </div>
      <div className="productList">
        {!products &&
          totalProducts.map((element) => {
            return <TotalProduct key={element.id} element={element} />;
          })}

        {products?.map((element) => {
          return <TotalProduct key={element.id} element={element} />;
        })}
      </div>
    </div>
  );
};

export default TotalProducts;

