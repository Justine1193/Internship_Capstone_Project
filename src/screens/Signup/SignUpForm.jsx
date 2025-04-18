"use client";
import React from "react";
import styles from "./SignUpForm.module.css";
import FormInput from "./FormInput";

const SignUpForm = () => {
  return (
    <form className={styles.formContainer}>
      <h1 className={styles.title}>Create an account</h1>

      <div className={styles.fullName}>
        <div className={styles.inputWrapper}>Full name</div>
      </div>

      <FormInput
        label="Email"
        placeholder="example.email@gmail.com"
        type="email"
        className={styles.emailInput}
      />

      <FormInput
        label="Password"
        placeholder="Enter at least 8+ characters"
        type="password"
        icon="https://cdn.builder.io/api/v1/image/assets/TEMP/bfb64ac2b1ae75b74c884e823d04164ea65d9fc2?placeholderIfAbsent=true&apiKey=9397be3a9c734b2aa759b5c45301270f"
        className={styles.passwordInput}
      />

      <button type="submit" className={styles.submitButton}>
        Sign up
      </button>
    </form>
  );
};

export default SignUpForm;
