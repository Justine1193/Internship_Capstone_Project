"use client";
import * as React from "react";
import styles from "./SignUpForm.module.css";
import FormInput from "./FormInput";
import PasswordInput from "./PasswordInput";
import FormButton from "./FormButton";

function SignUpForm() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <main className={styles.pageContainer}>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/@tabler/icons-webfont@latest/dist/tabler-icons.min.css"
      />
      <section className={styles.formContainer}>
        <h1 className={styles.formTitle}>Create an account</h1>
        <form onSubmit={handleSubmit}>
          <FormInput type="text" placeholder="Full name" name="fullName" />
          <FormInput
            type="email"
            placeholder="example.email@gmail.com"
            name="email"
          />
          <PasswordInput
            placeholder="Enter at least 8+ characters"
            name="password"
          />
          <FormButton type="submit">Sign up</FormButton>
        </form>
      </section>
    </main>
  );
}

export default SignUpForm;
