import React from "react";
import "./Button.css";

function Button({ testid, children, handleLogout }) {
  return (
    <button data-testid={testid} onClick={handleLogout}>
      {children}
    </button>
  );
}

export default Button;
