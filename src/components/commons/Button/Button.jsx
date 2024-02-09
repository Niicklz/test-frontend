import React from "react";
import "./Button.css";

export const Button = ({
  onClick,
  variant = "solid",
  text = "Click",
  size = "sm",
}) => {
  return (
    <button
      onClick={onClick}
      className={`button button-${variant} button-${size}`}
    >
      {text}
    </button>
  );
};
