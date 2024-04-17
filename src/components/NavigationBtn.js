import React from "react";
import { useNavigate, useNavigation } from "react-router-dom";

const NavigationBtn = ({ children, params }) => {
  const navigation = useNavigate();
  const Click = () => {
    if (children === "<") {
      navigation(`/items/${parseInt(params.id) - 1}`);
    } else if (children === ">") {
      navigation(`/items/${parseInt(params.id) + 1}`);
    } else {
      navigation(`/items/${children}`);
    }
  };
  return (
    <button
      onClick={Click}
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

