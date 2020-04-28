import React from "react";
import "./form-input.styles.scss";

const FormInput = ({ label, handleChange, wakeTheBackend, ...otherProps }) => {
  return (
    <div className="input-group">
      <input
        tabIndex="0"
        className={`${otherProps.value.length ? "shrink" : ""} ${wakeTheBackend ? 'wakeTheBackend' : ''} form-input`}
        onChange={handleChange}
        {...otherProps}
      />
      {label ? (
        <label
          className={`${
            otherProps.value.length ? "shrink" : ""
          } form-input-label`}
        >
          {label}
        </label>
      ) : null}
    </div>
  );
};

export default FormInput;
