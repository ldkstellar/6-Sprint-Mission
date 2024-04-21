import React from "react";
import { useState, useRef, useEffect } from "react";
import RegisterForm from "../components/RegisterForm";
const InitialValue = {
  image: null,
  productName: "",
  productIntroduce: "",
  productPrice: 0,
  productTag: "",
};

const RegisterItem = () => {
  const [productData, setProductData] = useState(InitialValue);
  const [isFillInput, setIsFillInput] = useState(false);
  const [previewImage, setPreviewImage] = useState(null);
  const [tagList, setTagList] = useState([]);
  const tagId = useRef(0);

  useEffect(() => {
    if (
      productData.productIntroduce &&
      productData.productName &&
      productData.productPrice &&
      tagList
    ) {
      return setIsFillInput(true);
    }
    setIsFillInput(false);
  }, [productData, tagList]);

  const onChangeImage = (e) => {
    const value = e.target.files[0];
    setProductData((prev) => ({ ...prev, ["image"]: value }));
    setPreviewImage(value);
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

  const registerTag = (e) => {
    if (e.key === "Enter" && productData.productTag !== "") {
      e.preventDefault();
      setTagList((prev) => [
        ...prev,
        { name: productData.productTag, tagId: tagId.current },
      ]);
      tagId.current += 1;
      setProductData((prev) => ({
        ...prev,
        ["productTag"]: InitialValue.productTag,
      }));
    }
  };

  const removeImage = () => {
    setProductData((prev) => ({ ...prev, ["image"]: null }));
    setPreviewImage(InitialValue.image);
  };

  const removeTagItems = (id) => {
    const remainList = tagList.filter((element) => element.tagId !== id);
    setTagList(remainList);
  };

  return (
    <RegisterForm
      tagList={tagList}
      removeTagItems={removeTagItems}
      setProductData={setProductData}
      registerTag={registerTag}
      previewImage={previewImage}
      setPreviewImage={setPreviewImage}
      formData={productData}
      isFillInput={isFillInput}
      onChangeImage={onChangeImage}
      onChangeProductIntroduce={onChangeProductIntroduce}
      onChangeProductName={onChangeProductName}
      onChangeProductPrice={onChangeProductPrice}
      onChangeProductTag={onChangeProductTag}
      removeImage={removeImage}
    />
  );
};

export default RegisterItem;

