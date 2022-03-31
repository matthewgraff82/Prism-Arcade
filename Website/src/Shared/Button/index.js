import React from "react";
import "./style.scss";

const Button = ({ btnLable, btnType }) => {
  return (
    <button
      className={`custom-btn ${
        btnType === "primary" ? "custom-btn-primary" : "custom-btn-secondary"
      }`}
    >
      {btnLable}
    </button>
  );
};

export default Button;
