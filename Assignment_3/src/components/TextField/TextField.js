import React from 'react'

function TextField({name,id,value,handleFormChange}) {
  return (
    <>
      <label htmlFor={id}>{name}</label>
      <input type="text" name={name} id={id} data-testid={id} required={true} autoComplete="off" value={value} onChange={e=>handleFormChange(e)}/>
    </>
  )
}

export default TextField;