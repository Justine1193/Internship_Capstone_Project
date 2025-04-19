"use client";
import * as React from "react";
import styles from "./SignUpForm.module.css";
import FormInput from "./FormInput";
import PasswordInput from "./PasswordInput";
import FormButton from "./FormButton";

import { db } from '../../../firebase';
import { ref, push, set } from 'firebase/database';
import { useNavigate } from "react-router-dom"; // para sa redirect
import SignInPage from '../SignIn/SignInPage.jsx';

function SignUpForm() {
  const [fullName, setFullName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const navigate = useNavigate(); // redirect

  const handleSubmit = (e) => {
    e.preventDefault();

    const userRef = ref(db, 'users/');
    const newUserRef = push(userRef);

    set(newUserRef, {
      fullName,
      email,
      password
    }).then(() => {
      alert("Account created successfully!");
      navigate("/signin"); // or wherever you want to go
    }).catch((error) => {
      alert("Error saving user: " + error.message);
    });
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
          <FormButton type="submit">Sign up</FormButton>
        </form>
      </section>
    </main>
  );
}

export default SignUpForm;