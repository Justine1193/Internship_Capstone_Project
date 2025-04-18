"use client";
import React, { useState } from "react";
import styles from "./SignIn.module.css";
import FormInput from "./FormInput";

const SignInForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <h1 className={styles.title}>Sign in</h1>

      <FormInput
        label="Email"
        type="email"
        name="email"
        placeholder="example.email@gmail.com"
        value={formData.email}
        onChange={handleInputChange}
      />

      <div className={styles.passwordContainer}>
        <FormInput
          label="Password"
          type={showPassword ? "text" : "password"}
          name="password"
          placeholder="Enter at least 8+ characters"
          value={formData.password}
          onChange={handleInputChange}
        />
        <button
          type="button"
          className={styles.passwordToggle}
          onClick={() => setShowPassword(!showPassword)}
          aria-label={showPassword ? "Hide password" : "Show password"}
        >
          <svg
            width="16"
            height="17"
            viewBox="0 0 16 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.92731 8.95983C1.7887 8.76166 1.71436 8.52567 1.71436 8.28383C1.71436 8.04199 1.7887 7.806 1.92731 7.60783C2.82617 6.33526 5.03931 3.7124 7.99988 3.7124C10.9605 3.7124 13.1736 6.33526 14.0725 7.60783C14.2111 7.806 14.2854 8.04199 14.2854 8.28383C14.2854 8.52567 14.2111 8.76166 14.0725 8.95983C13.1736 10.2324 10.9605 12.8553 7.99988 12.8553C5.03931 12.8553 2.82617 10.2324 1.92731 8.95983Z"
              stroke="#171A1F"
              strokeWidth="1.37143"
              strokeMiterlimit="10"
              strokeLinecap="square"
            />
            <path
              d="M8.00007 10.5697C9.26244 10.5697 10.2858 9.54637 10.2858 8.28401C10.2858 7.02164 9.26244 5.99829 8.00007 5.99829C6.7377 5.99829 5.71436 7.02164 5.71436 8.28401C5.71436 9.54637 6.7377 10.5697 8.00007 10.5697Z"
              stroke="#171A1F"
              strokeWidth="1.37143"
              strokeMiterlimit="10"
              strokeLinecap="square"
            />
            <path
              d="M2.28564 13.9982L13.7142 2.56958"
              stroke="#171A1F"
              strokeWidth="1.37143"
              strokeMiterlimit="10"
              strokeLinecap="square"
            />
          </svg>
        </button>
      </div>

      <div className={styles.formActions}>
        <label className={styles.rememberMe}>
          <div className={styles.checkbox}>
            <input
              type="checkbox"
              name="rememberMe"
              checked={formData.rememberMe}
              onChange={handleInputChange}
              className={styles.hiddenCheckbox}
            />
            <div className={styles.checkboxIcon}>
              <svg
                width="12"
                height="13"
                viewBox="0 0 12 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.7998 6.78394L4.4998 9.48394L10.1998 3.78394"
                  stroke="#F2FBFB"
                  strokeWidth="0.72"
                  strokeMiterlimit="10"
                  strokeLinecap="square"
                />
              </svg>
            </div>
            <span>Remember me</span>
          </div>
        </label>
        <a href="#" className={styles.forgotPassword}>
          Forgot password?
        </a>
      </div>

      <button type="submit" className={styles.submitButton}>
        Sign in
      </button>
    </form>
  );
};

export default SignInForm;
