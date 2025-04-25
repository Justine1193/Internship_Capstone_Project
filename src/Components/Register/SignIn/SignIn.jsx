import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../firebase"; // make sure this is correctly set up
import { useNavigate } from "react-router-dom";
import "./SignIn.css";

const SignInForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError("Please fill in both fields.");
      return;
    }

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      console.log("✅ User signed in:", user.uid);

      // ✅ Redirect to dashboard page after successful login
      navigate("/dashboard");
    } catch (err) {
      setError("Invalid email or password.");
      console.error("Login error:", err.message);
    }
  };

  return (
    <div className="signin-container">
      <form onSubmit={handleLogin} className="auth-form">
        <div className="signin-name">
          <h1>Log In</h1>
        </div>

        {error && <div className="error-message">{error}</div>}

        <input
          type="email"
          placeholder="Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="auth-input"
        />

        <input
          type="password"
          placeholder="Your Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="auth-input"
        />

        <button type="submit" className="auth-button">
          Log In
        </button>

        <div className="signup-redirect">
          <p>
            Don't have an account? <a href="/signup">Sign Up</a>
          </p>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
