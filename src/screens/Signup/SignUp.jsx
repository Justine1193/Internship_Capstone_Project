"use client";
import React from "react";
import styles from "./SignUp.module.css";
import SignUpForm from "./SignUpForm";
import SignUpImage from "./SignUpImage";

const SignUp = () => {
  return (
    <main className={styles.signup}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.formColumn}>
            <SignUpForm />
          </div>
          <div className={styles.imageColumn}>
            <SignUpImage />
          </div>
        </div>
      </div>
    </main>
  );
};

export default SignUp;
