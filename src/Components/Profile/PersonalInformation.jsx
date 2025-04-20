"use client";
import React from "react";
import styles from "./ProfileDetails.module.css";
import FormField from "./FormField";

const PersonalInformation = ({ personalInfo, onUpdatePersonalInfo }) => {
  const programOptions = [
    {
      value: "College of Information and Computing Studies",
      label: "College of Information and Computing Studies",
    },
    { value: "College of Engineering", label: "College of Engineering" },
    {
      value: "College of Business Administration",
      label: "College of Business Administration",
    },
  ];

  return (
    <section className={styles.infoSection}>
      <h3 className={styles.sectionTitle}>Personal Information</h3>
      <div className={styles.profileContainer}>
        <img
          alt="Profile photo"
          src="https://images.pexels.com/photos/31628378/pexels-photo-31628378.jpeg"
          className={styles.profilePhoto}
        />
        <div className={styles.formContainer}>
          <FormField
            label="Full Name"
            value={personalInfo.fullName}
            onChange={(e) => onUpdatePersonalInfo("fullName", e.target.value)}
          />
          <FormField
            label="Student ID"
            value={personalInfo.studentId}
            disabled
          />
          <FormField
            label="Program"
            type="select"
            value={personalInfo.program}
            options={programOptions}
            onChange={(e) => onUpdatePersonalInfo("program", e.target.value)}
          />
          <FormField
            label="Email Address"
            type="email"
            value={personalInfo.email}
            onChange={(e) => onUpdatePersonalInfo("email", e.target.value)}
          />
        </div>
      </div>
    </section>
  );
};

export default PersonalInformation;
