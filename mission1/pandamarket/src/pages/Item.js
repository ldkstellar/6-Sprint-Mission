import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Products from "../components/Products";
const Item = () => {
  useEffect(() => {
    fetch("https://panda-market-api.vercel.app/products")
      .then((response) => response.text())
      .then((data) => {});
  });
  const [value, setValue] = useState(1);
  const myClick = () => {
    setValue(2);
  };

  return (
    <div onClick={myClick}>
      {value}
      <Header />
      <Products />
    </div>
  );
};

export default Item;

