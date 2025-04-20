"use client";
import React from "react";
import SignInForm from "./SignInForm";
import styles from "./styles/SignInPage.module.css";

function SignInPage() {
  return (
    <main className={styles.container}>
      <section className={styles.formSection}>
        <SignInForm />
      </section>
      <aside className={styles.decorativePanel} />
    </main>
  );
}

export default SignInPage;
