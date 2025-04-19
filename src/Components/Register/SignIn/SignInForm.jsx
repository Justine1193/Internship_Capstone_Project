"use client";
import React from "react";
import PasswordInput from "./PasswordInput";
import CheckboxField from "./CheckboxField";
import styles from "./styles/SignInForm.module.css";

function SignInForm() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <h1 className={styles.title}>Sign in</h1>

      <div className={styles.inputGroup}>
        <label htmlFor="email" className={styles.label}>
          Email
        </label>
        <input
          type="email"
          id="email"
          className={styles.input}
          placeholder="example.email@gmail.com"
        />
      </div>

      <div className={styles.inputGroup}>
        <label htmlFor="password" className={styles.label}>
          Password
        </label>
        <PasswordInput />
      </div>

      <div className={styles.formFooter}>
        <CheckboxField id="remember-me" label="Remember me" />
        <button type="button" className={styles.forgotPassword}>
          Forgot password?
        </button>
      </div>

      <button type="submit" className={styles.submitButton}>
        Sign in
      </button>
    </form>
  );
}

export default SignInForm;
