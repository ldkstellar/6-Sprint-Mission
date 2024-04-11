import React from "react";
import useData from "../hooks/useData";
import "../style/Products.css";
import BestProduct from "./BestProduct";

const Products = () => {
  const { value, setValue } = useData();
  return (
    <div className="totalList">
      <BestProduct value={value} />
    </div>
  );
};

export default Products;

