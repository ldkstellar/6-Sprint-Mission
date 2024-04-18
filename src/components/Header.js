import React, { useContext, useState } from "react";
import "../style/Header.css";
import logo from "../img/panda.png";
import Button from "./Button";
import profile from "../img/profile.png";
import { useLocation, useParams } from "react-router-dom";
import { LoginContext } from "../context/LoginContext";
const Header = () => {
  const login = useContext(LoginContext);
  return (
    <div className="nav">
      <div className="leftBtn">
        <img className="logo" src={logo} />
        <p>자유게시판</p>
        <p id="presentPage">중고마켓</p>
      </div>
      <div className="rightBtn">
        {login || <button className="loginBtn">로그인</button>}
        {login && (
          <Button width={40} height={40}>
            <img src={profile} alt="profile"></img>
          </Button>
        )}
      </div>
    </div>
  );
};

export default Header;

