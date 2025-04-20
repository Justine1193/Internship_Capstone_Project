import React from "react";
import styles from "./FormButton.module.css";

const FormButton = ({ children, type = "button", onClick }) => {
  return (
    <button type={type} className={styles.button} onClick={onClick}>
      {children}
    </button>
  );
};

export default FormButton;
