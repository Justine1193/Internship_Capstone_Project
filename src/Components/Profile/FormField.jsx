"use client";
import React from "react";
import styles from "./ProfileDetails.module.css";

const FormField = ({
  label,
  type = "text",
  value,
  onChange,
  disabled,
  options,
}) => {
  const renderInput = () => {
    if (type === "select") {
      return (
        <select
          className={styles.formSelect}
          value={value}
          onChange={onChange}
          disabled={disabled}
        >
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      );
    }

    return (
      <input
        type={type}
        className={styles.formInput}
        value={value}
        onChange={onChange}
        disabled={disabled}
      />
    );
  };

  return (
    <div className={styles.formGroup}>
      <label className={styles.formLabel}>{label}</label>
      {renderInput()}
    </div>
  );
};

export default FormField;
