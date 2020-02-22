import React from 'react';
import './form-input.styles.scss';

const FormInput = ({label, handleChange, ...otherProps}) => {
  return(
    <div className="input-group">
      <input
        tabIndex="0"
        className={`${
        otherProps.value.length ? "shrink" : null
      } form-input`} onChange={handleChange} {...otherProps}/>
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
    </div>
  )
}

export default FormInput;