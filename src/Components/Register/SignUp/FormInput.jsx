import React from "react";
import styles from "./SignUpForm.module.css";

function FormInput({ type, placeholder, name, value, onChange }) {
  return (
    <div className={styles.inputWrapper}>
      <input
        type={type}
        placeholder={placeholder}
        name={name}
        value={value}           // <-- ADD this
        onChange={onChange}     // <-- ADD this
        className={styles.input}
        aria-label={placeholder}
        required
      />
    </div>
  );
}

export default FormInput;
