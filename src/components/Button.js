import React from "react";
import "../style/Button.css";

const Button = ({ children, type = "", width, height, onClick }) => {
  return (
    <button
      onClick={onClick}
      style={{
        cursor: "pointer",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        border: "none",
        width: width,
        height: height,
      }}
      className={
        type === "default"
          ? "default none"
          : type === "fill"
          ? "default fill"
          : type === "cancel"
          ? "default cancel"
          : "btn"
      }
    >
      {children}
    </button>
  );
};

export default Button;

