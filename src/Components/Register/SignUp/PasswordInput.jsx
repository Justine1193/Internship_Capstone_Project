"use client";
import React, { useState } from "react";
import styles from "./SignUpForm.module.css";

function PasswordInput({ placeholder, name }) {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className={styles.passwordWrapper}>
      <input
        type={showPassword ? "text" : "password"}
        placeholder={placeholder}
        name={name}
        className={styles.input}
        aria-label="Password"
      />
      <i
        className={`ti ti-eye ${styles.eyeIcon}`}
        onClick={togglePasswordVisibility}
        role="button"
        tabIndex={0}
        aria-label={showPassword ? "Hide password" : "Show password"}
      />
    </div>
  );
}

export default PasswordInput;
