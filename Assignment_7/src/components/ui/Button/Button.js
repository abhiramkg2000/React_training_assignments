import React from "react";
import "./Button.css";

function Button({ testid, children }) {
  return (
    <button data-testid={testid}>
      {children}
    </button>
  );
}

export default Button;
