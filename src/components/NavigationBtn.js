import React from "react";
import { useNavigate } from "react-router-dom";
import "../style/NavigationBtn.css";
const NavigationBtn = ({ children, params, type = "default" }) => {
  const navigation = useNavigate();
  const handleClick = (e) => {
    if (type === "default") {
      const id = e.target.name;
      navigation(`/items/${id}`);
    } else if (type === "move") {
      if (e.target.name === "<") {
        if (params.id > 1) {
          const id = parseInt(params.id) - 1;
          navigation(`/items/${id}`);
        }
      } else if (e.target.name === ">") {
        const id = parseInt(params.id) + 1;
        navigation(`/items/${id}`);
      }
    }
  };
  return (
    <button
      className={
        params.id === children ? ["navBtn", " clicked"].join("") : "navBtn"
      }
      name={children}
      onClick={handleClick}
    >
      {children}
    </button>
  );
};
export default NavigationBtn;

