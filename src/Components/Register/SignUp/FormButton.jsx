import React from "react";
import styles from "./SignUpForm.module.css";

function FormButton({ children, type = "button" }) {
  return (
    <button type={type} className={styles.submitButton}>
      {children}
    </button>
  );
}

export default FormButton;