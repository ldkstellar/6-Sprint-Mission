import React, { useEffect, useRef } from "react";
import Button from "./Button";
import "../style/RegisterForm.css";
import Tag from "./Tag";
const RegisterForm = ({
  removeTagItems,
  tagList,
  registerTag,
  removeImage,
  previewImage,
  setPreviewImage,
  formData,
  isFillInput,
  onChangeImage,
  onChangeProductIntroduce,
  onChangeProductName,
  onChangeProductPrice,
  onChangeProductTag,
}) => {
  const fileRef = useRef();
  const handleKeydown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
    }
  };
  useEffect(() => {
    if (!formData.image) return;
    const nextPreview = URL.createObjectURL(formData.image);
    setPreviewImage(nextPreview);
    return () => {
      setPreviewImage(null);
      URL.revokeObjectURL(nextPreview);
    };
  }, [formData.image]);
  return (
    <>
      <form className="formContainer" onKeyDown={handleKeydown}>
        <div className="header">
          <h2>상품등록하기</h2>
          <button
            disabled={!isFillInput}
            onClick={() => console.log("등록완료")}
            className={isFillInput ? "submitBtn on" : "submitBtn off"}
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
            <input
              type={"file"}
              id="fileInput"
              ref={fileRef}
              onChange={onChangeImage}
            ></input>
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
            type={"text"}
            placeholder="상품명을 입력해주세요"
            value={formData.productName}
            onChange={onChangeProductName}
          ></input>
        </div>
        <div className="productIntroduce">
          <p>상품 소개</p>
          <input
            type={"text"}
            placeholder="상품소개를 입력해주세요"
            onChange={onChangeProductIntroduce}
            value={formData.productIntroduce}
          ></input>
        </div>
        <div className="productPrice">
          <p>판매가격</p>
          <input
            type="number"
            placeholder="판매 가격을 입력해주세요"
            value={formData.productPrice}
            onChange={onChangeProductPrice}
          ></input>
        </div>
        <div className="productTag">
          <p>태그</p>
          <input
            placeholder="태그를 입력해주세요"
            value={formData.productTag}
            onChange={onChangeProductTag}
            onKeyUp={registerTag}
          ></input>
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

