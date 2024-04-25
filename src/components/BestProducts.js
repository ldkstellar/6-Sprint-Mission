import React, { useState, useEffect } from "react";
import "../style/BestProduct.css";
import BestProduct from "./BestProduct";
import { getProducts } from "../api/api";
const BestProducts = ({ windowWidth }) => {
  const [bestProducts, setBestProduct] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const getBestProductsData = async () => {
    try {
      setIsLoading(true);
      const query = `?orderBy=favorite`;
      const result = await getProducts(query);
      setBestProduct(result);
    } catch (error) {
      window.alert(error.message);
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    getBestProductsData();
  }, []);

  const goodProducts = [];

  if (windowWidth < 1199 && windowWidth > 767) {
    goodProducts = [...bestProducts.slice(0, 2)];
  } else if (windowWidth < 767) {
    goodProducts = [...bestProducts.slice(0, 1)];
  } else {
    goodProducts = [...bestProducts.slice(0, 4)];
  }

  if (isLoading) {
    return <div>로딩중</div>;
  }
  return (
    <div className="bestContainer">
      <p id="title">베스트 상품</p>

      <div className="bestList">
        {goodProducts.map((element) => {
          return <BestProduct key={element.id} element={element} />;
        })}
      </div>
    </div>
  );
};

export default BestProducts;

