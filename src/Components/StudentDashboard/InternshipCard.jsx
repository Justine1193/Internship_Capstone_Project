import React from "react";
import styles from "./Dashboard.module.css";

const InternshipCard = () => {
  return (
    <article className={styles.internshipCard}>
      <div className={styles.cardContent}>
        <div className={styles.cardMain}>
          <div className={styles.companyLogo}>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/9397be3a9c734b2aa759b5c45301270f/9b2ca56e2072dab4128d6d3e1c9708199473ba9d?placeholderIfAbsent=true"
              alt="Company Logo"
              className={styles.logoImage}
            />
          </div>
          <div className={styles.cardInfo}>
            <h3 className={styles.internshipTitle}>
              Intern Cybersecurity, Governance, Risk, <br />
              and Compliance (Start ASAP)
            </h3>
            <div className={styles.companyInfo}>
              <img src="https://cdn.builder.io/api/v1/image/assets/9397be3a9c734b2aa759b5c45301270f/6e4800e7d0cab4b06ff4d1050ccc4c7b8bd6b143?placeholderIfAbsent=true" alt="Company" className={styles.companyIcon} />
              <img
                src="https://cdn.builder.io/api/v1/image/assets/9397be3a9c734b2aa759b5c45301270f/e613a023346d2592f50c9adbe8e647fa11d55b45?placeholderIfAbsent=true"
                alt="Location"
                className={styles.locationIcon}
              />
              <span className={styles.location}>Mandaluyong</span>
            </div>
          </div>
        </div>
        <div className={styles.cardActions}>
          <button className={styles.saveButton}>
            <span>Save</span>
            <img src="https://cdn.builder.io/api/v1/image/assets/9397be3a9c734b2aa759b5c45301270f/1dcf51dd53c649dc8d0838bc62497ff0859af23c?placeholderIfAbsent=true" alt="Save" className={styles.saveIcon} />
          </button>
          <button className={styles.infoButton}>INFO</button>
        </div>
      </div>
    </article>
  );
};

export default InternshipCard;
