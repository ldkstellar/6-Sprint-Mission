import React, { useEffect, useState } from "react";
import useData from "../hooks/useData";
import "../style/Products.css";
import BestProduct from "./BestProduct";
import TotalProduct from "./TotalProduct";
import Button from "./Button";
import { useParams } from "react-router-dom";
const Products = () => {
  const params = useParams();
  const { value, setValue } = useData();
  // 미디어 쿼리의 일치 여부를 상태로 관리
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize); // 마운트시 이벤트 리스너 등록
    return () => {
      window.removeEventListener("resize", handleResize); // 언마운트시 이벤트 리스너 삭제[
    };
  }, []);
  return (
    <div className="totalList">
      <BestProduct value={value} windowWidth={windowWidth} />
      <TotalProduct
        value={value}
        setValue={setValue}
        windowWidth={windowWidth}
      />
      <div className="page">
        <Button params={params}>{"<"}</Button>
        <Button params={params}>{"1"}</Button>
        <Button params={params}>{"2"}</Button>
        <Button params={params}>{"3"}</Button>
        <Button params={params}>{"4"}</Button>
        <Button params={params}>{">"}</Button>
      </div>
    </div>
  );
};

export default Products;

