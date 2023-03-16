import React from 'react';

function Button({disabled}) {
  return (
    <div>
        <button disabled={disabled}>Submit</button>
    </div>
  )
}

export default Button;