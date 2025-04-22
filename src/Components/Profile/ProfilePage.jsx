import React from 'react';
import ClientNavbar from '../components/ClientNavbar';
import PersonalInfoForm from '../components/PersonalInfoForm';
import InternshipPreferencesForm from '../components/InternshipPreferencesForm';
import FooterSection from '../components/FooterSection';
import styles from '../styles/ProfilePage.module.css';

const ProfilePage = () => {
  return (
    <>
      <ClientNavbar />
      <div className={styles.profileContainer}>
        <div className={styles.profileBox}>
          <h2>My Profile</h2>
          <PersonalInfoForm />
          <InternshipPreferencesForm />
          <div className={styles.buttonContainer}>
            <button className={styles.saveButton}>Save Changes</button>
          </div>
        </div>
      </div>
      <FooterSection />
    </>
  );
};

export default ProfilePage;
