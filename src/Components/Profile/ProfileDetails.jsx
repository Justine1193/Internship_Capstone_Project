"use client";
import React, { useState } from "react";
import styles from "./ProfileDetails.module.css";
import PersonalInformation from "./PersonalInformation";
import InternshipPreferences from "./InternshipPreferences";

const ProfileDetails = () => {
  const [personalInfo, setPersonalInfo] = useState({
    fullName: "Juan dela Cruz",
    studentId: "25-12980-225",
    program: "College of Information and Computing Studies",
    email: "juan.delacruz@neu.edu.ph",
  });

  const [preferences, setPreferences] = useState({
    industry: "",
    location: "",
    type: "",
  });

  const handleUpdatePersonalInfo = (field, value) => {
    setPersonalInfo((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleUpdatePreference = (field, value) => {
    setPreferences((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSaveChanges = () => {
    console.log("Saving changes...", { personalInfo, preferences });
  };

  return (
    <main className={styles.container}>
      <h2 className={styles.pageTitle}>Profile Details</h2>

      <PersonalInformation
        personalInfo={personalInfo}
        onUpdatePersonalInfo={handleUpdatePersonalInfo}
      />

      <div className={styles.preferencesContainer}>
        <InternshipPreferences
          preferences={preferences}
          onUpdatePreference={handleUpdatePreference}
        />
        <button className={styles.saveButton} onClick={handleSaveChanges}>
          Save Changes
        </button>
      </div>
    </main>
  );
};

export default ProfileDetails;
