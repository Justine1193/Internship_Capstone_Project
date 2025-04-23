import React, { useState } from "react";
import "./SignIn.css";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);
  const [error, setError] = useState("");

  const handleSignIn = (e) => {
    e.preventDefault();
    // Basic validation before submitting
    if (!email || !password) {
      setError("Please fill in both fields.");
      return;
    }
    // Clear previous error
    setError("");

    // Simulate an API request or authentication process (e.g., Firebase)
    const mockAuthResponse = { success: true, token: "mock-token-123" };

    if (mockAuthResponse.success) {
      console.log("Sign In Successful:", { email, password, remember });

      // If 'Remember Me' is checked, save the token in local storage
      if (remember) {
        localStorage.setItem("userToken", mockAuthResponse.token);
        console.log("Token saved in localStorage");
      } else {
        sessionStorage.setItem("userToken", mockAuthResponse.token);
        console.log("Token saved in sessionStorage");
      }

      // Optionally, you can redirect the user to a dashboard or homepage
      // For example, using React Router: history.push("/dashboard");
    } else {
      setError("Failed to sign in. Please check your credentials.");
    }
  };

  return (
    <div className="signin-container">
      <h2>Sign In</h2>
      <form onSubmit={handleSignIn} className="auth-form">
        {error && <div className="error-message">{error}</div>}
        <input
          type="email"
          placeholder="Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          aria-label="Email Address"
          className="auth-input"
        />
        <input
          type="password"
          placeholder="Your Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          aria-label="Password"
          className="auth-input"
        />
        <div className="remember-container">
          <input
            type="checkbox"
            id="rememberMe"
            checked={remember}
            onChange={(e) => setRemember(e.target.checked)}
            aria-label="Remember Me"
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
