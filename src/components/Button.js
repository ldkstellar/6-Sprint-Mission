import React from "react";
import "../style/Button.css";

const Button = ({ children, type = "default", onClick }) => {
  return (
    <button
      onClick={onClick}
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

