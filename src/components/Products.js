import React, { useEffect, useState } from "react";
import "../style/Products.css";
import BestProducts from "./BestProducts";
import TotalProducts from "./TotalProducts";
import PageNationBtn from "./PageNationBtn";
import { useSearchParams } from "react-router-dom";

const Products = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [searchParams, setSearchParams] = useSearchParams({
    page: 1,
    pageSize: 10,
    orderBy: "recent",
  });
  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize); // 언마운트시 이벤트 리스너 삭제[
    };
  }, []);

  return (
    <div className="products">
      <BestProducts windowWidth={windowWidth} />
      <TotalProducts searchParams={searchParams} windowWidth={windowWidth} />
      <div className="page">
        <PageNationBtn searchParams={searchParams} type="left">
          {"<"}
        </PageNationBtn>
        <PageNationBtn searchParams={searchParams} type="default">
          {"1"}
        </PageNationBtn>
        <PageNationBtn searchParams={searchParams} type="default">
          {"2"}
        </PageNationBtn>
        <PageNationBtn searchParams={searchParams} type="default">
          {"3"}
        </PageNationBtn>
        <PageNationBtn searchParams={searchParams} type="right">
          {">"}
        </PageNationBtn>
      </div>
    </div>
  );
};

export default Products;

