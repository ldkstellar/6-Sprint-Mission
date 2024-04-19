import React, { useContext, useState } from "react";
import "../style/Header.css";
import logo from "../img/panda.png";
import Button from "./Button";
import profile from "../img/profile.png";
import { LoginContext } from "../context/LoginContext";
import NavigationBar from "./NavigationBar";

const Header = () => {
  const isLogin = useContext(LoginContext);
  return <NavigationBar isLogin={isLogin} />;
};

export default Header;

