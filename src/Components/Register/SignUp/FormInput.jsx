"use client";
import React from "react";
import styles from "./FormInput.module.css";

const FormInput = ({ label, type, value, onChange, onBlur, error, id }) => {
  return (
    <div className={styles.inputGroup}>
      <label className={styles.label} htmlFor={id}>
        {label}
      </label>
      <input
        id={id}
        className={styles.input}
        type={type}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        aria-invalid={!!error}
        aria-describedby={error ? `${id}-error` : undefined}
      />
      {error && (
        <p className={styles.errorMessage} id={`${id}-error`} role="alert">
          {error}
        </p>
      )}
    </div>
  );
};

export default FormInput;
