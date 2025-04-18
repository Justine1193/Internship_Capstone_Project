"use client";
import React from "react";
import styles from "./FormInput.module.css";

const FormInput = ({ label, placeholder, type = "text", icon, className }) => {
  return (
    <div className={`${styles.inputContainer} ${className}`}>
      <label className={styles.label}>{label}</label>
      {placeholder && <span className={styles.placeholder}>{placeholder}</span>}
      <input type={type} className={styles.input} aria-label={label} />
      {icon && (
        <img src={icon} alt="" className={styles.icon} aria-hidden="true" />
      )}
    </div>
  );
};

export default FormInput;
