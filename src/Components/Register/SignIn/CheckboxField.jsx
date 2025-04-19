"use client";
import React from "react";
import styles from "./styles/CheckboxField.module.css";

function CheckboxField({ id, label }) {
  return (
    <div className={styles.checkboxWrapper}>
      <label className={styles.label} htmlFor={id}>
        <div className={styles.checkbox}>
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={styles.checkIcon}
          >
            <path
              d="M1.7998 6L4.4998 8.7L10.1998 3"
              stroke="#F2FBFB"
              strokeWidth="0.72"
              strokeMiterlimit="10"
              strokeLinecap="square"
            />
          </svg>
        </div>
        <span className={styles.labelText}>{label}</span>
      </label>
      <input type="checkbox" id={id} className={styles.hiddenCheckbox} />
    </div>
  );
}

export default CheckboxField;
