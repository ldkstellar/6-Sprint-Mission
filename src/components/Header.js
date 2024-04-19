import React, { useContext } from "react";
import "../style/Header.css";
import { LoginContext } from "../context/LoginContext";
import NavigationBar from "./NavigationBar";

const Header = () => {
  const isLogin = useContext(LoginContext);
  return <NavigationBar isLogin={isLogin} />;
};

export default Header;

