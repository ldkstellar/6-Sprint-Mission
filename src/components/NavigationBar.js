import React from "react";
import logo from "../img/panda.png";
import Button from "./Button";
import profile from "../img/profile.png";
const NavigationBar = ({ isLogin }) => {
  return (
    <div className="nav">
      <div className="leftBtn">
        <img className="logo" src={logo} />
        <p>자유게시판</p>
        <p id="presentPage">중고마켓</p>
      </div>
      <div className="rightBtn">
        {isLogin || <button className="loginBtn">로그인</button>}
        {isLogin && (
          <Button width={40} height={40}>
            <img src={profile} alt="profile"></img>
          </Button>
        )}
      </div>
    </div>
  );
};

export default NavigationBar;

