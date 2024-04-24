import React, { useEffect, useState, useRef } from "react";
import Button from "./Button";
import "../style/RegisterForm.css";
import Tag from "./Tag";
import { Form } from "react-router-dom";
const RegisterForm = () => {
  const INITIAL_VALUE = {
    image: null,
    productName: "",
    productIntroduce: "",
    productPrice: 0,
    productTag: "",
  };
  const [productData, setProductData] = useState(INITIAL_VALUE);
  const [isFormFilled, setIsFillInput] = useState(false);
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
        ["productTag"]: INITIAL_VALUE.productTag,
      }));
    }
  };

  const removeImage = () => {
    setProductData((prev) => ({ ...prev, ["image"]: null }));
    setPreviewImage(INITIAL_VALUE.image);
  };

  const removeTagItems = (id) => {
    const remainList = tagList.filter((element) => element.tagId !== id);
    setTagList(remainList);
  };
  const handleKey = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData();
    for (const key in productData) {
      data.append(key, productData[key]);
    }
    console.log(data);
  };

  useEffect(() => {
    if (!productData.image) return;
    const nextPreview = URL.createObjectURL(productData.image);
    setPreviewImage(nextPreview);
    return () => {
      setPreviewImage(null);
      URL.revokeObjectURL(nextPreview);
    };
  }, [productData.image]);

  return (
    <>
      <form
        className="formContainer"
        onSubmit={handleSubmit}
        onKeyDown={handleKey}
      >
        <div className="header">
          <h2>상품등록하기</h2>
          <button
            disabled={!isFormFilled}
            type="submit"
            className={`submitBtn ${isFormFilled ? "on" : "off"}`}
          >
            등록
          </button>
        </div>

        <div className="productImage">
          <p className="productImageTitle">상품 이미지</p>
          <div className="filePreview">
            <label htmlFor="fileInput" className="imageRegister">
              <p>+</p>
              <p>이미지등록</p>
            </label>
            <input type="file" id="fileInput" onChange={onChangeImage}></input>
            {previewImage && (
              <div className="previewImageBox">
                <Button
                  width={20}
                  height={20}
                  type="cancel"
                  onClick={removeImage}
                >
                  X
                </Button>
                <img className="previewImage" src={previewImage} />
              </div>
            )}
          </div>
        </div>

        <div className="productName">
          <p>상품명</p>
          <input
            type="text"
            placeholder="상품명을 입력해주세요"
            value={productData.productName}
            onChange={onChangeProductName}
          />
        </div>

        <div className="productIntroduce">
          <p>상품 소개</p>
          <input
            type="text"
            placeholder="상품소개를 입력해주세요"
            onChange={onChangeProductIntroduce}
            value={productData.productIntroduce}
          />
        </div>

        <div className="productPrice">
          <p>판매가격</p>
          <input
            type="number"
            placeholder="판매 가격을 입력해주세요"
            value={productData.productPrice}
            onChange={onChangeProductPrice}
          />
        </div>

        <div className="productTag">
          <p>태그</p>
          <input
            placeholder="태그를 입력해주세요"
            value={productData.productTag}
            onChange={onChangeProductTag}
            onKeyUp={registerTag}
          />
        </div>

        <div className="tagList">
          {tagList.map((element) => (
            <Tag
              key={element.tagId}
              name={element.name}
              tagId={element.tagId}
              onclick={removeTagItems}
            />
          ))}
        </div>
      </form>
    </>
  );
};

export default RegisterForm;

