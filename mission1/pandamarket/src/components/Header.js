import React from "react";
import "../style/Header.css";
import logo from "../img/panda.png";

const Header = () => {
  return (
    <div className="navi">
      <div className="leftBtn">
        <img src={logo} />
        <a href="/additem">자유게시판</a>
        <a id="presentPage">중고마켓</a>
      </div>
      <button className="loginBtn">로그인</button>
    </div>
  );
};

export default Header;

