import React from "react";

function RadioButton({
  name,
  checkbox1,
  checkbox2,
  checkbox3,
  handleFormChange,
}) {
  return (
    <>
      <label htmlFor="male">Male</label>
      <input
        type="radio"
        name={name}
        id="male"
        data-testid="male"
        value="male"
        ref={checkbox1}
        required={true}
        onChange={(e) => handleFormChange(e)}
      />
      <label htmlFor="male">Female</label>
      <input
        type="radio"
        name={name}
        id="female"
        data-testid="female"
        value="female"
        ref={checkbox2}
        required={true}
        onChange={(e) => handleFormChange(e)}
      />
      <label htmlFor="other">Other</label>
      <input
        type="radio"
        name={name}
        id="other"
        data-testid="other"
        value="other"
        ref={checkbox3}
        required={true}
        onChange={(e) => handleFormChange(e)}
      />
    </>
  );
}

export default RadioButton;
