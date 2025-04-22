import React from "react";
import styles from "./DashboardOverview.module.css";

const DashboardOverview = ({ internships }) => {
  return (
    <section className={styles.overview}>
      <div className={styles.card}>
        <h3>Total Internships</h3>
        <p>{internships.length}</p>
      </div>
      <div className={styles.card}>
        <h3>Remote</h3>
        <p>{internships.filter(i => i.loc === "Remote").length}</p>
      </div>
      <div className={styles.card}>
        <h3>Open Positions</h3>
        <p>{internships.filter(i => i.status === "Open").length}</p>
      </div>
    </section>
  );
};

export default DashboardOverview;
