import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';
import { auth, db, createUserWithEmailAndPassword, ref, set } from "../../../firebase";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./SignUp.css";

const SignUpForm = () => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
  
      await set(ref(db, "users/" + user.uid), {
        fullName,
        email,
      });
  
      console.log("User registered:", user.uid);
      navigate("/login");
  
    } catch (error) {
      console.error("Error signing up:", error.message);
    }
  };
  

  return (
    <div className="signup-container">
      <Form className="auth-form" onSubmit={handleSubmit}>

      <div className="signup-name">
        <h1>Sign Up</h1>
      </div>

        {/* Full Name */}

        <Form.Group className="mb-3">
          <Form.Control
            type="text"
            placeholder="Full Name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
            className="auth-input"
          />
        </Form.Group>

        {/* Email */}
        <Form.Group className="mb-3">
          <Form.Control
            type="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="auth-input"
          />
        </Form.Group>

        {/* Password */}
        <Form.Group className="mb-3">
          <Form.Control
            type="password"
            placeholder="Your Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="auth-input"
          />
        </Form.Group>

        {/* Submit Button */}
        <button type="submit" className="auth-button">
          Sign Up
          
        </button>
        <div className="login-redirect">
          <p>
            Already have an account? <a href="/signin">Log In</a>
          </p>
        </div>
      </Form>
    </div>
  );
};

export default SignUpForm;
