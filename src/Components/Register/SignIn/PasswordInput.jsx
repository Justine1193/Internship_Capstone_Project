"use client";
import React, { useState } from "react";
import styles from "./styles/PasswordInput.module.css";

function PasswordInput() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className={styles.passwordWrapper}>
      <input
        type={showPassword ? "text" : "password"}
        id="password"
        className={styles.passwordInput}
        placeholder="Enter at least 8+ characters"
      />
      <button
        type="button"
        onClick={() => setShowPassword(!showPassword)}
        className={styles.toggleVisibility}
        aria-label={showPassword ? "Hide password" : "Show password"}
      >
        <svg
          width="16"
          height="17"
          viewBox="0 0 16 17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={styles.eyeIcon}
        >
          <path
            d="M1.92731 9.1759C1.7887 8.97772 1.71436 8.74173 1.71436 8.4999C1.71436 8.25806 1.7887 8.02207 1.92731 7.8239C2.82617 6.55132 5.03931 3.92847 7.99988 3.92847C10.9605 3.92847 13.1736 6.55132 14.0725 7.8239C14.2111 8.02207 14.2854 8.25806 14.2854 8.4999C14.2854 8.74173 14.2111 8.97772 14.0725 9.1759C13.1736 10.4485 10.9605 13.0713 7.99988 13.0713C5.03931 13.0713 2.82617 10.4485 1.92731 9.1759Z"
            stroke="#171A1F"
            strokeWidth="1.37143"
            strokeMiterlimit="10"
            strokeLinecap="square"
          />
          <path
            d="M8.00007 10.7858C9.26244 10.7858 10.2858 9.76244 10.2858 8.50007C10.2858 7.2377 9.26244 6.21436 8.00007 6.21436C6.7377 6.21436 5.71436 7.2377 5.71436 8.50007C5.71436 9.76244 6.7377 10.7858 8.00007 10.7858Z"
            stroke="#171A1F"
            strokeWidth="1.37143"
            strokeMiterlimit="10"
            strokeLinecap="square"
          />
          {!showPassword && (
            <path
              d="M2.28564 14.2142L13.7142 2.78564"
              stroke="#171A1F"
              strokeWidth="1.37143"
              strokeMiterlimit="10"
              strokeLinecap="square"
            />
          )}
        </svg>
      </button>
    </div>
  );
}

export default PasswordInput;
