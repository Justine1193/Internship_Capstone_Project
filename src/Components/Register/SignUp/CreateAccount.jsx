import styles from "./CreateAccount.module.css";
import { useState } from "react";

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
      // Here you would typically make an API call to create the account
      await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulated API call
    } catch (error) {
      console.error("Error creating account:", error);
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
          {emailError && (
            <div className={styles.errorMessage}>{emailError}</div>
          )}
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
              <svg
                width="16"
                height="17"
                viewBox="0 0 16 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.92731 9.1759C1.7887 8.97772 1.71436 8.74173 1.71436 8.4999C1.71436 8.25806 1.7887 8.02207 1.92731 7.8239C2.82617 6.55132 5.03931 3.92847 7.99988 3.92847C10.9605 3.92847 13.1736 6.55132 14.0725 7.8239C14.2111 8.02207 14.2854 8.25806 14.2854 8.4999C14.2854 8.74173 14.2111 8.97772 14.0725 9.1759C13.1736 10.4485 10.9605 13.0713 7.99988 13.0713C5.03931 13.0713 2.82617 10.4485 1.92731 9.1759Z"
                  stroke="#171A1F"
                  strokeWidth="1.37143"
                  strokeMiterlimit="10"
                  strokeLinecap="square"
                />
                <path
                  d="M8.00007 10.7858C9.26244 10.7858 10.2858 9.76244 10.2858 8.50007C10.2858 7.2377 9.26244 6.21436 8.00007 6.21436C6.7377 6.21436 5.71436 7.2377 5.71436 8.50007C5.71436 9.76244 6.7377 10.7858 8.00007 10.7858Z"
                  stroke="#171A1F"
                  strokeWidth="1.37143"
                  strokeMiterlimit="10"
                  strokeLinecap="square"
                />
                <path
                  d="M2.28564 14.2142L13.7142 2.78564"
                  stroke="#171A1F"
                  strokeWidth="1.37143"
                  strokeMiterlimit="10"
                  strokeLinecap="square"
                />
              </svg>
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
              <svg
                width="16"
                height="17"
                viewBox="0 0 16 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.92731 9.1759C1.7887 8.97772 1.71436 8.74173 1.71436 8.4999C1.71436 8.25806 1.7887 8.02207 1.92731 7.8239C2.82617 6.55132 5.03931 3.92847 7.99988 3.92847C10.9605 3.92847 13.1736 6.55132 14.0725 7.8239C14.2111 8.02207 14.2854 8.25806 14.2854 8.4999C14.2854 8.74173 14.2111 8.97772 14.0725 9.1759C13.1736 10.4485 10.9605 13.0713 7.99988 13.0713C5.03931 13.0713 2.82617 10.4485 1.92731 9.1759Z"
                  stroke="#171A1F"
                  strokeWidth="1.37143"
                  strokeMiterlimit="10"
                  strokeLinecap="square"
                />
                <path
                  d="M8.00007 10.7858C9.26244 10.7858 10.2858 9.76244 10.2858 8.50007C10.2858 7.2377 9.26244 6.21436 8.00007 6.21436C6.7377 6.21436 5.71436 7.2377 5.71436 8.50007C5.71436 9.76244 6.7377 10.7858 8.00007 10.7858Z"
                  stroke="#171A1F"
                  strokeWidth="1.37143"
                  strokeMiterlimit="10"
                  strokeLinecap="square"
                />
                <path
                  d="M2.28564 14.2142L13.7142 2.78564"
                  stroke="#171A1F"
                  strokeWidth="1.37143"
                  strokeMiterlimit="10"
                  strokeLinecap="square"
                />
              </svg>
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
