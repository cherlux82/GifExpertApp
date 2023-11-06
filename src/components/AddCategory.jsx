import React, { useState } from 'react'

export const AddCategory = ({onNewCategory}) => {

    const onInputChange = (e) => {
        setInputValue(e.target.value);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        if(inputValue.trim().length === 0) return;
        onNewCategory(inputValue)
        setInputValue("");
    }

const [inputValue, setInputValue] = useState('')

  return (
    <form onSubmit={onSubmit}>
    <input type="text" 
        placeholder='gif search'
        value={inputValue}
        onChange={onInputChange}
    />
   </form>
  )
}
