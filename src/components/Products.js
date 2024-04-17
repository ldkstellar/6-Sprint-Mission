import React, { useEffect, useState } from "react";
import "../style/Products.css";
import BestProducts from "./BestProduct";
import TotalProducts from "./TotalProducts";
import { useParams } from "react-router-dom";
import NavigationBtn from "./NavigationBtn";

const Products = () => {
  const params = useParams();
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const getData = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(
        "https://panda-market-api.vercel.app/products",
        {
          method: "GET",
        }
      );
      const result = await response.json();
      setProducts(result.list);
    } catch (error) {
      window.alert("불러오기 실패");
    } finally {
      setIsLoading(false);
    }
  };

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    getData();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize); // 언마운트시 이벤트 리스너 삭제[
    };
  }, []);
  if (!isLoading) {
    return (
      <div className="products">
        <BestProducts bestProducts={products} windowWidth={windowWidth} />
        <TotalProducts
          totalProducts={products}
          setTotalProducts={setProducts}
          windowWidth={windowWidth}
        />
        <div className="page">
          <NavigationBtn type="move" params={params}>
            {"<"}
          </NavigationBtn>
          <NavigationBtn params={params}>{"1"}</NavigationBtn>
          <NavigationBtn params={params}>{"2"}</NavigationBtn>
          <NavigationBtn params={params}>{"3"}</NavigationBtn>
          <NavigationBtn params={params}>{"4"}</NavigationBtn>
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

