import React from "react";
import { useNavigate, useNavigation } from "react-router-dom";

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
      name={children}
      onClick={handleClick}
      style={{
        backgroundColor: params?.id === children ? "#2F80ED" : "#FFFFFF",
        cursor: "pointer",
        width: "40px",
        height: "40px",
        borderRadius: "40px",
        border: "1px solid #E5E7EB",
        color: params?.id === children ? "#FFFFFFFF" : "#6B7280",
      }}
    >
      {children}
    </button>
  );
};
export default NavigationBtn;

