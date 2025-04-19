import React from "react";
import styles from "./SignUpForm.module.css";

function FormInput({ type, placeholder, name }) {
  return (
    <div className={styles.inputWrapper}>
      <input
        type={type}
        placeholder={placeholder}
        name={name}
        className={styles.input}
        aria-label={placeholder}
      />
    </div>
  );
}

export default FormInput;
