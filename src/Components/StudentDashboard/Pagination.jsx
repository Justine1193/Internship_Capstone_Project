import React from "react";
import styles from "./Dashboard.module.css";

const Pagination = () => {
  return (
    <nav className={styles.pagination} aria-label="Pagination">
      <div className={styles.paginationGroup}>
        <img src="https://cdn.builder.io/api/v1/image/assets/9397be3a9c734b2aa759b5c45301270f/a81e585229275d8309c44fcc4fbef72bb3a6de47?placeholderIfAbsent=true" alt="Previous" className={styles.paginationIcon} />
        <button className={styles.paginationButtonActive}>1</button>
      </div>
      <div className={styles.paginationGroup}>
        <button className={styles.paginationButton}>2</button>
        <button className={styles.paginationButton}>3</button>
        <button className={styles.paginationButton}>4</button>
        <img src="https://cdn.builder.io/api/v1/image/assets/9397be3a9c734b2aa759b5c45301270f/0b17a1c06627195eb6911bce2789976c29bd7ac9?placeholderIfAbsent=true" alt="More" className={styles.paginationIcon} />
      </div>
      <div className={styles.paginationGroup}>
        <button className={styles.paginationButton}>10</button>
        <button className={styles.paginationButton}>11</button>
        <img src="https://cdn.builder.io/api/v1/image/assets/9397be3a9c734b2aa759b5c45301270f/c991059eb530dd53e877113a5eee32b72326ce53?placeholderIfAbsent=true" alt="Next" className={styles.paginationIcon} />
      </div>
    </nav>
  );
};

export default Pagination;
