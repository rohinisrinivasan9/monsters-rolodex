import React from 'react';
import './search-box.styles.css';

// functional component just gets props and returns HTML. 
// if there is no need for an internal state or lifecycle MSInputMethodContext, use functional component

// placeholder and handlechange are introduced as a way to show reusable components. app.js has the definitions for these 2.

export const SearchBox = ({ placeholder, handleChange }) => (
    <input 
    className='search'
    type='search' 
    placeholder= {placeholder}
    onChange={handleChange}>
  </input>
)