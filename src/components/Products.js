import React, { useEffect, useState } from "react";

import "../style/Products.css";
import BestProducts from "./BestProducts";
import TotalProducts from "./TotalProducts";
import { useParams } from "react-router-dom";
import NavigationBtn from "./NavigationBtn";
import { getProducts } from "../api/api";

const Products = () => {
  const params = useParams();
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [bestProduct, setBestProduct] = useState([]);
  const [products, setProducts] = useState([]);
  const [orderBy, setOrderBy] = useState("recent");
  const [isLoading, setIsLoading] = useState(false);
  const [selectValue, setSelectValue] = useState("1");

  const getProductsData = async () => {
    try {
      setIsLoading(true);
      const result = await getProducts();
      setProducts(result.list);
    } catch (error) {
      window.alert(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const getBestProductsData = async () => {
    try {
      setIsLoading(true);
      const query = `?pages=${params}&pagesize=${10}&orderby=${orderBy}`;
      const result = await getProducts(query);
      setBestProduct(result.list);
    } catch (error) {
      window.alert(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    getBestProductsData();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize); // 언마운트시 이벤트 리스너 삭제[
    };
  }, []);

  useEffect(() => {
    getProductsData();
  }, [params.id, orderBy]);
  if (!isLoading) {
    return (
      <div className="products">
        <BestProducts bestProducts={bestProduct} windowWidth={windowWidth} />
        <TotalProducts
          setOrderBy={setOrderBy}
          totalProducts={products}
          selectValue={selectValue}
          setSelectValue={setSelectValue}
          windowWidth={windowWidth}
        />
        <div className="page">
          <NavigationBtn type="move" params={params}>
            {"<"}
          </NavigationBtn>
          <NavigationBtn params={params}>{"1"}</NavigationBtn>
          <NavigationBtn params={params}>{"2"}</NavigationBtn>
          <NavigationBtn type="move" params={params}>
            {">"}
          </NavigationBtn>
        </div>
      </div>
    );
  }
  return <div>로딩중</div>;
};

export default Products;

