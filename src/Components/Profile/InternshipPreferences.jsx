"use client";
import React from "react";
import styles from "./ProfileDetails.module.css";
import FormField from "./FormField";

const InternshipPreferences = ({ preferences, onUpdatePreference }) => {
  const industryOptions = [
    { value: "", label: "Select Industry" },
    { value: "tech", label: "Technology" },
    { value: "finance", label: "Finance" },
    { value: "healthcare", label: "Healthcare" },
  ];

  const locationOptions = [
    { value: "", label: "Select Location" },
    { value: "metro_manila", label: "Metro Manila" },
    { value: "cebu", label: "Cebu" },
    { value: "davao", label: "Davao" },
  ];

  const typeOptions = [
    { value: "", label: "Select Internship Type" },
    { value: "full_time", label: "Full Time" },
    { value: "part_time", label: "Part Time" },
    { value: "remote", label: "Remote" },
  ];

  return (
    <section className={styles.preferencesSection}>
      <h3 className={styles.sectionTitle}>Internship References</h3>
      <FormField
        label="Preferred Industry"
        type="select"
        value={preferences.industry}
        options={industryOptions}
        onChange={(e) => onUpdatePreference("industry", e.target.value)}
      />
      <FormField
        label="Preferred Location"
        type="select"
        value={preferences.location}
        options={locationOptions}
        onChange={(e) => onUpdatePreference("location", e.target.value)}
      />
      <FormField
        label="Preferred Internship Type"
        type="select"
        value={preferences.type}
        options={typeOptions}
        onChange={(e) => onUpdatePreference("type", e.target.value)}
      />
    </section>
  );
};

export default InternshipPreferences;
