import React from 'react';
import './button.styles.scss';

const Button =({name,hadnleFunc, ...OtherProps})=>{
  return(
    <button {...OtherProps} onClick={hadnleFunc}>{name}</button>
  )
}

export default Button;