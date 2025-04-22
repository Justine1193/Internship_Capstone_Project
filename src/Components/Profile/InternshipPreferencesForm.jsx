import React from 'react';
import styles from '../styles/ProfilePage.module.css';

const InternshipPreferencesForm = () => {
  return (
    <div className={styles.section}>
      <h3>Internship Preferences</h3>
      <label>Preferred Industry</label>
      <select>
        <option>Technology</option>
        <option>Finance</option>
        <option>Healthcare</option>
      </select>
      <label>Preferred Location</label>
      <select>
        <option>Remote</option>
        <option>On-site</option>
        <option>Hybrid</option>
      </select>
      <label>Preferred Internship Type</label>
      <select>
        <option>Full-time</option>
        <option>Part-time</option>
        <option>Project-based</option>
      </select>
    </div>
  );
};

export default InternshipPreferencesForm;
