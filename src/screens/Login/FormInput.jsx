import React from "react";
import styles from "./SignIn.module.css";

const FormInput = ({ label, type, name, placeholder, value, onChange }) => {
  return (
    <div className={styles.inputGroup}>
      <label className={styles.inputLabel}>{label}</label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={styles.input}
      />
    </div>
  );
};

export default FormInput;
