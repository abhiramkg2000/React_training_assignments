import React from 'react';

function TextField({setDisabled}) {
  const handleChange = (e) => {
    if (e.target.value !== "test") {
      setDisabled(true);
    } else {
      setDisabled(false);
    }
  };

  return (
    <div> 
    <label htmlFor="input1">Enter Text: </label>
    <input type="text" id="input1" onChange={handleChange} autoFocus/>
      <br />
      <br />
    </div>
  )
}

export default TextField;