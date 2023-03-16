import React from "react";
import "./Button.css";

function Button({ testid, setClick, children }) {
  return (
    <button
      data-testid={testid}
      onClick={() => setClick((prevState) => !prevState)}
    >
      {children}
    </button>
  );
}
export default Button;
