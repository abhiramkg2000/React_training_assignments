import React from "react";
import "./TextField.css";

function TextField({ name, id, value, handleFormChange, checkValidity }) {
  return (
    <div>
      {/* <label htmlFor={id}>{name}</label> */}
      <input
        type="text"
        name={name}
        id={id}
        data-testid={id}
        data-datavalue={value}
        required={true}
        autoComplete="off"
        value={value}
        onChange={(e) => handleFormChange(e)}
        onInvalid={checkValidity}
      />
      <span className="floating-label">Enter Email</span>
    </div>
  );
}

export default TextField;
