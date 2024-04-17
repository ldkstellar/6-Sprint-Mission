import React from "react";
import "../style/Header.css";
import logo from "../img/panda.png";

const Header = () => {
  return (
    <div className="nav">
      <div className="leftBtn">
        <img className="logo" src={logo} />
        <p>자유게시판</p>
        <p id="presentPage">중고마켓</p>
      </div>
      <button className="loginBtn">로그인</button>
    </div>
  );
};

export default Header;

