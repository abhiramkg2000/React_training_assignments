import React from "react";

function PasswordField({ name, id, value, handleFormChange, checkValidity }) {

  return (
    <div>
      {/* <label htmlFor={id}>{name}</label> */}
      <input
        type="password"
        name={name}
        id={id}
        data-testid={id}
        data-datavalue={value}
        required={true}
        autoComplete="off"
        value={value}
        onChange={handleFormChange}
        onInvalid={checkValidity}
      />
      <span className="floating-label">Enter Password</span>
    </div>
  );
}

export default PasswordField;
