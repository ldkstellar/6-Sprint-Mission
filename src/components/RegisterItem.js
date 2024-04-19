import React from "react";
import { useState, useEffect } from "react";
import RegisterForm from "../components/RegisterForm";
const RegisterItem = () => {
  const [productData, setProductData] = useState({
    image: null,
    productName: "",
    productIntroduce: "",
    productPrice: "",
    productTag: "",
  });
  const [isFillInput, setIsFillInput] = useState(false);

  useEffect(() => {
    if (
      productData.productIntroduce &&
      productData.productName &&
      productData.productPrice &&
      productData.productTag
    ) {
      return setIsFillInput(true);
    }
    setIsFillInput(false);
  }, [productData]);

  const onChangeImage = (e) => {
    const value = e.target.value;
    setProductData((prev) => ({ ...prev, ["productImage"]: value }));
  };

  const onChangeProductName = (e) => {
    const value = e.target.value;
    setProductData((prev) => ({ ...prev, ["productName"]: value }));
  };

  const onChangeProductIntroduce = (e) => {
    const value = e.target.value;
    setProductData((prev) => ({ ...prev, ["productIntroduce"]: value }));
  };

  const onChangeProductPrice = (e) => {
    const value = e.target.value;
    setProductData((prev) => ({ ...prev, ["productPrice"]: value }));
  };

  const onChangeProductTag = (e) => {
    const value = e.target.value;
    setProductData((prev) => ({ ...prev, ["productTag"]: value }));
  };
  return (
    <>
      <RegisterForm
        formData={productData}
        isFillInput={isFillInput}
        onChangeImage={onChangeImage}
        onChangeProductIntroduce={onChangeProductIntroduce}
        onChangeProductName={onChangeProductName}
        onChangeProductPrice={onChangeProductPrice}
        onChangeProductTag={onChangeProductTag}
      />
    </>
  );
};

export default RegisterItem;

