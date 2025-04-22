import React, { useState } from "react";
import "./SignIn.css";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);

  const handleSignIn = (e) => {
    e.preventDefault();
    // Implement your sign-in logic here.
    // The `remember` value can be used to save user credentials/token locally.
    console.log("Sign In:", { email, password, remember });
  };

  return (
    <div className="signin-container">
      <h2>Sign In</h2>
      <form onSubmit={handleSignIn} className="auth-form">
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
        <div className="remember-container">
          <input
            type="checkbox"
            id="rememberMe"
            checked={remember}
            onChange={(e) => setRemember(e.target.checked)}
          />
          <label htmlFor="rememberMe">Remember Me</label>
        </div>
        <button type="submit" className="auth-button">
          Log In
        </button>
      </form>
    </div>
  );
};

export default SignIn;
