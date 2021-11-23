import React from 'react';
import Styles from './Input.module.css';

const Input = ({ label, type, name, value, onChange, error, onBlur }) => {
  return (
    <div className={Styles.wrapper}>
      <label htmlFor={name} className={Styles.label}>
        {label}
      </label>
      <input
        className={Styles.input}
        type={type}
        id={name}
        name={name}
        onChange={onChange}
        value={value}
        onBlur={onBlur}
      ></input>
      {error && <p className={Styles.error}>{error}</p>}
    </div>
  );
};

export default Input;
