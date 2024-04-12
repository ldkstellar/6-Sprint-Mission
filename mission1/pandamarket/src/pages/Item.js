import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Button from "../components/Button";
import Header from "../components/Header";
import Products from "../components/Products";

const Item = () => {
  const params = useParams();

  return (
    <div>
      <Header />
      <Products params={params} />
    </div>
  );
};

export default Item;

