import styles from "./CreateAccount.module.css";
import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../firebase"; // Make sure this path is correct

function CreateAccount() {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateEmail = (value) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!value) {
      setEmailError("Email is required");
      return false;
    }
    if (!emailRegex.test(value)) {
      setEmailError("Please enter a valid email");
      return false;
    }
    setEmailError("");
    return true;
  };

  const validatePassword = () => {
    if (password !== confirmPassword) {
      setEmailError("Passwords do not match");
      return false;
    }
    return true;
  };

  const toggleAcceptTerms = () => {
    setAcceptTerms(!acceptTerms);
  };

  const handleSubmit = async () => {
    if (!validateEmail(email) || !validatePassword() || !acceptTerms) {
      return;
    }

    setIsSubmitting(true);
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      console.log("User created:", userCredential.user);
      // You can redirect or show a message here
    } catch (error) {
      console.error("Error creating account:", error.message);
      setEmailError(error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.formContainer}>
        <h1 className={styles.title}>Create Account</h1>

        <div className={styles.inputGroup}>
          <label className={styles.label}>Email</label>
          <input
            className={styles.input}
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              validateEmail(e.target.value);
            }}
          />
          {emailError && <div className={styles.errorMessage}>{emailError}</div>}
        </div>

        <div className={styles.inputGroup}>
          <label className={styles.label}>Password</label>
          <div className={styles.passwordWrapper}>
            <input
              className={styles.input}
              placeholder="Enter your password"
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <div
              className={styles.passwordToggle}
              onClick={() => setShowPassword(!showPassword)}
            >
              {/* Eye icon here */}
              {/* ... (keep your eye SVG) */}
            </div>
          </div>
        </div>

        <div className={styles.inputGroup}>
          <label className={styles.label}>Confirm Password</label>
          <div className={styles.passwordWrapper}>
            <input
              className={styles.input}
              placeholder="Confirm your password"
              type={showConfirmPassword ? "text" : "password"}
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <div
              className={styles.passwordToggle}
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            >
              {/* Eye icon here */}
              {/* ... (keep your eye SVG) */}
            </div>
          </div>
        </div>

        <label className={styles.termsLabel}>
          <div
            className={styles.checkbox}
            role="checkbox"
            aria-checked={acceptTerms}
            tabIndex={0}
            onClick={toggleAcceptTerms}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                toggleAcceptTerms();
              }
            }}
            style={{
              background: acceptTerms ? "#1A5458" : "transparent",
            }}
          >
            {acceptTerms && (
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.7998 6L4.4998 8.7L10.1998 3"
                  stroke="#F2FBFB"
                  strokeWidth="0.72"
                  strokeMiterlimit="10"
                  strokeLinecap="square"
                />
              </svg>
            )}
          </div>
          <span className={styles.termsText}>
            I agree to the Terms of Service and Privacy Policy
          </span>
        </label>

        <button
          className={styles.submitButton}
          disabled={isSubmitting}
          onClick={handleSubmit}
          style={{
            background: isSubmitting ? "#BCC1CA" : "#4A90E2",
            cursor: isSubmitting ? "not-allowed" : "pointer",
          }}
        >
          {isSubmitting ? "Creating account..." : "Create Account"}
        </button>
      </div>
      <div className={styles.decorativeSidebar} />
    </div>
  );
}

export default CreateAccount;
