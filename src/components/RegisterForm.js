import React from "react";
import Button from "./Button";
import "../style/RegisterForm.css";
const RegisterForm = () => {
  return (
    <form className="container">
      <div className="header">
        <h2>상품등록하기</h2>
        <Button type="default">등록</Button>
      </div>
    </form>
  );
};

export default RegisterForm;

