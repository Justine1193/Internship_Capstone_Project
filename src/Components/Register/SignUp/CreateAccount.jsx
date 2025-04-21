"use client";
import React, { useState } from "react";
import styles from "./CreateAccount.module.css";

import { db } from "../../../firebase";
import { ref, push, set } from "firebase/database";
import { useNavigate } from "react-router-dom";

function CreateAccount() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password || !fullName) {
      alert("Please fill in all fields.");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    if (!acceptTerms) {
      alert("You must accept the terms and conditions.");
      return;
    }

    setIsSubmitting(true);

    try {
      const userRef = ref(db, "users/");
      const newUserRef = push(userRef);

      await set(newUserRef, {
        fullName,
        email,
        password,
      });

      alert("Account created successfully!");
      navigate("/signin");
    } catch (error) {
      alert("Error creating account: " + error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className={styles.pageContainer}>
      <section className={styles.formContainer}>
        <h1 className={styles.formTitle}>Create Account</h1>
        <form onSubmit={handleSubmit}>
          <FormInput
            type="text"
            placeholder="Full name"
            name="fullName"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
          <FormInput
            type="email"
            placeholder="example.email@gmail.com"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <PasswordInput
            placeholder="Enter at least 8+ characters"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <PasswordInput
            placeholder="Confirm password"
            name="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />

          <label className={styles.termsLabel}>
            <input
              type="checkbox"
              checked={acceptTerms}
              onChange={() => setAcceptTerms(!acceptTerms)}
            />
            <span className={styles.termsText}>
              I agree to the Terms of Service and Privacy Policy
            </span>
          </label>

          <FormButton type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Creating account..." : "Create Account"}
          </FormButton>
        </form>
      </section>
    </main>
  );
}

export default CreateAccount;
