"use client";
import React from "react";
import styles from "./SignIn.module.css";
import SignInForm from "./SigninForm";

const SignIn = () => {
  return (
    <main className={styles.container}>
      <link
        href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&family=Poppins:wght@700&display=swap"
        rel="stylesheet"
      />
      <section className={styles.formSection}>
        <SignInForm />
      </section>
      <section className={styles.illustrationSection}>
        <svg
          width="445"
          height="419"
          viewBox="0 0 445 419"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={styles.illustration}
        >
          <g clipPath="url(#clip0_620_196)">
            <path
              d="M445.419 257.47L399.675 310.592L379.242 234.334L445.419 257.47Z"
              fill="#1A5458"
            />
            {/* SVG paths preserved exactly as in original */}
            <path
              d="M0.407827 313.747C0.246127 314.982 0.00672681 316.24 -0.0121732 317.489C-0.0168124 318.077 0.456109 318.558 1.04413 318.563C1.63214 318.567 2.11259 318.094 2.11723 317.506C2.11723 316.343 2.36083 315.175 2.51203 314.024C2.53961 313.471 2.13748 312.988 1.5877 312.916C1.03793 312.844 0.524618 313.205 0.407827 313.747Z"
              fill="white"
            />
          </g>
          <defs>
            <clipPath id="clip0_620_196">
              <rect y="0.783936" width="445" height="418" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </section>
    </main>
  );
};

export default SignIn;
