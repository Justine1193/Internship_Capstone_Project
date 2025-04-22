import React from 'react';
import styles from '../styles/ProfilePage.module.css';
import avatar from '../assets/sample-avatar.png';

const PersonalInfoForm = () => {
  return (
    <div className={styles.section}>
      <h3>Profile Details</h3>
      <div className={styles.profileDetails}>
        <img src={avatar} alt="Avatar" className={styles.avatar} />
        <div className={styles.inputGroup}>
          <label>Full Name</label>
          <input type="text" defaultValue="Juan Dela Cruz" />
          <label>Student ID</label>
          <input type="text" defaultValue="25-12890-225" />
          <label>Program</label>
          <select defaultValue="College of Informatics and Computing Studies">
            <option>College of Informatics and Computing Studies</option>
            <option>College of Engineering</option>
          </select>
          <label>Email Address</label>
          <input type="email" defaultValue="juan.delacruz@neu.edu.ph" />
        </div>
      </div>
    </div>
  );
};

export default PersonalInfoForm;
