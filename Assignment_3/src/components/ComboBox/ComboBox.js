import React from 'react'

function ComboBox({name,id,list,value,handleFormChange}) {
  return (
    <>
      <label htmlFor={id}>{name}</label>
      <input type="number" name={name} list={list} id={id} data-testid={id} min="1" required={true} autoComplete="off" value={value} onChange={e=>handleFormChange(e)}/>
      <datalist id={list}>
        <option name={name} value="6"/>
        <option name={name} value="18"/>
        <option name={name} value="24"/>
        <option name={name} value="30"/>
        <option name={name} value="45"/>
        <option name={name} value="60"/>
      </datalist> 
    </>
  )
}

export default ComboBox;