import React from 'react';
import './form-input.styles.scss';

const FormInput = ({label, handleChange, ...otherProps}) => {
  return(
    <div className="input-group">
      {
        label ? 
        (
          <label 
            className={`${
                otherProps.value.length ? "shrink" : null
                } form-input-label`} >
              {label}
          </label>
        ) :
        null
      }
      <input
        tabindex="0"
        className={`${
        otherProps.value.length ? "shrink" : null
      } form-input`} onChange={handleChange} {...otherProps}/>
    </div>
  )
}

export default FormInput;