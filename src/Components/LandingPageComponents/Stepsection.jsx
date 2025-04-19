import React from 'react';
import "./styles/Stepsection.css";
import { FaSearch, FaBriefcase, FaUsers } from 'react-icons/fa'; // icons from react-icons

function StepsSection() {
  return (
    <section className="steps-section">
      <div className="step">
        <FaSearch className="step-icon" />
        <h3>Start Your Journey</h3>
        <p>Take the first step toward gaining real-world experience and building your future career.    </p>
      </div>

      <div className="step">
        <FaBriefcase className="step-icon" />
        <h3>Explore Opportunities</h3>
        <p>Browse through diverse internship listings tailored to your preferences.</p>
      </div>

      <div className="step">
        <FaUsers className="step-icon" />
        <h3>Get Connected</h3>
        <p>Connect with industry leaders and kickstart your career through meaningful internship experiences.</p>
      </div>
    </section>
  );
}

export default StepsSection;
