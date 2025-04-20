import React from "react";
import styles from "./Dashboard.module.css";
import InternshipCard from "./InternshipCard";
import Pagination from "./Pagination";

const InternshipList = () => {
  return (
    <section className={styles.internshipListSection}>
      <div className={styles.listHeader}>
        <h2 className={styles.listTitle}>Internship Listings</h2>
        <div className={styles.sortSection}>
          <span className={styles.sortLabel}>Sorted By</span>
          <select className={styles.sortDropdown}>
            <option>Most Relevant</option>
          </select>
        </div>
      </div>

      <div className={styles.listContainer}>
        {[...Array(8)].map((_, index) => (
          <InternshipCard key={index} />
        ))}
      </div>

      <Pagination />
    </section>
  );
};

export default InternshipList;
