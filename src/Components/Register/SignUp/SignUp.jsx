import React, { useState } from "react";
import { auth, createUserWithEmailAndPassword } from "./firebase"; // Import Firebase functions
import "./SignUp.css";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [loading, setLoading] = useState(false);
  const [signupError, setSignupError] = useState(""); // To handle errors from sign-up

  const handleSignUp = async (e) => {
    e.preventDefault();

    // Basic email validation
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailRegex.test(email)) {
      setEmailError("Please enter a valid email address.");
      return;
    } else {
      setEmailError("");
    }

    setLoading(true);

    try {
      // Firebase sign-up logic
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      console.log("User signed up:", user);

      // Reset form and loading state
      setEmail("");
      setPassword("");
      setLoading(false);
    } catch (error) {
      setSignupError(error.message); // Handle sign-up errors (e.g., weak password, user already exists)
      setLoading(false);
    }
  };

  return (
    <div className="signup-container">
      <h2>Sign Up</h2>
      <form onSubmit={handleSignUp} className="auth-form">
        <div>
          <input
            type="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="auth-input"
          />
          {emailError && <div className="error">{emailError}</div>}
        </div>
        <div>
          <input
            type={passwordVisible ? "text" : "password"}
            placeholder="Your Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="auth-input"
          />
          <button
            type="button"
            className="toggle-visibility"
            onClick={() => setPasswordVisible(!passwordVisible)}
          >
            {passwordVisible ? "Hide" : "Show"} Password
          </button>
        </div>
        <button type="submit" className="auth-button" disabled={loading}>
          {loading ? "Creating Account..." : "Create Account"}
        </button>
        {signupError && <div className="error">{signupError}</div>}
      </form>
    </div>
  );
};

export default SignUp;
