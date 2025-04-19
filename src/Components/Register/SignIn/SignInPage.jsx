"use client";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { db } from "../../../firebase";
import { ref, get } from "firebase/database";

import styles from "./styles/SignInForm.module.css"; // (optional CSS)

function SignInForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    password: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const userRef = ref(db, 'users/' + formData.fullName.replace(/\s+/g, '_'));
    try {
      const snapshot = await get(userRef);
      if (snapshot.exists()) {
        const userData = snapshot.val();
        if (userData.password === formData.password) {
          alert('Login successful!');
          navigate('/'); // 🚀 Redirect to HomePage or Dashboard
        } else {
          alert('Wrong password.');
        }
      } else {
        alert('User not found.');
      }
    } catch (error) {
      console.error('Error logging in:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.formContainer}>
      <h2>Sign In</h2>
      <input
        type="text"
        name="fullName"
        placeholder="Full Name"
        value={formData.fullName}
        onChange={handleChange}
        required
        className={styles.inputField}
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        value={formData.password}
        onChange={handleChange}
        required
        className={styles.inputField}
      />
      <button
        type="submit"
        className={styles.submitButton}
      >
        Log In
      </button>
    </form>
  );
}

export default SignInForm;
