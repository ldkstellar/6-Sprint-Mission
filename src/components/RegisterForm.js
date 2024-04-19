import React from "react";
import Button from "./Button";
import "../style/RegisterForm.css";
const RegisterForm = () => {
  return (
    <>
      <form className="formContainer">
        <div className="header">
          <h2>상품등록하기</h2>
          <Button type="fill" width={88} height={42}>
            등록
          </Button>
        </div>
        <div className="productImage">
          <p>상품 이미지</p>
          <label htmlFor="fileInput" className="imageRegister">
            <p>+</p>
            <p>이미지등록</p>
          </label>
          <input type={"file"} id="fileInput"></input>
        </div>
        <div className="productName">
          <p>상품명</p>
          <input placeholder="상품명을 입력해주세요"></input>
        </div>
      </form>
    </>
  );
};

export default RegisterForm;

