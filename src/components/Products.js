import React, { useEffect, useState } from "react";
import useData from "../hooks/useData";
import "../style/Products.css";
import BestProduct from "./BestProduct";
import TotalProduct from "./TotalProduct";
import Button from "./Button";
const Products = ({ params }) => {
  const { value, setValue } = useData(undefined);
  // 미디어 쿼리의 일치 여부를 상태로 관리

  return (
    <div className="totalList">
      <BestProduct value={value} />
      <TotalProduct value={value} setValue={setValue} />
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

