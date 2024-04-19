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
        backgroundColor: "#FFFFFFFF",
      }}
      className={
        type === "default"
          ? ["btn", " none"].join("")
          : type === "fill"
          ? ["btn", " fill"].join("")
          : ""
      }
    >
      {children}
    </button>
  );
};

export default Button;

