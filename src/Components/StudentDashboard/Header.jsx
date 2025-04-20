import React from "react";
import styles from "./Dashboard.module.css";

const Header = () => {
  return (
    <header className={styles.container77}>
      <div className={styles.headerLeft}>
        <div className={styles.logoContainer}>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/9397be3a9c734b2aa759b5c45301270f/99f32d8565a55147a30aeb847fe7f5ad45a0fed6?placeholderIfAbsent=true"
            alt="InternQuest Logo"
            className={styles.logoImage}
          />
          <h1 className={styles.logoText}>InternQuest</h1>
        </div>
        <nav className={styles.headerMenu6}>
          <a href="#" className={styles.menuLink}>
            Home
          </a>
          <a href="#" className={`${styles.menuLink} ${styles.active}`}>
            <span>Internship</span>
            <div className={styles.activeIndicator} />
          </a>
        </nav>
      </div>
      <div className={styles.userSection}>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/9397be3a9c734b2aa759b5c45301270f/9a24457cfb6e3807ac4f3ad2dc1b17794b951aed?placeholderIfAbsent=true"
          alt="Notifications"
          className={styles.notificationIcon}
        />
        <div className={styles.userProfile}>
          <img src="https://cdn.builder.io/api/v1/image/assets/9397be3a9c734b2aa759b5c45301270f/f90aafbc04ea79ca5cc87df3cf637637d9add5bd?placeholderIfAbsent=true" alt="User Avatar" className={styles.userAvatar} />
          <span className={styles.userName}>Amanda Smith</span>
          <img src="https://cdn.builder.io/api/v1/image/assets/9397be3a9c734b2aa759b5c45301270f/c423625d5bb2d090368751bc7b17634a88ee3c24?placeholderIfAbsent=true" alt="Dropdown" className={styles.dropdownIcon} />
        </div>
      </div>
    </header>
  );
};

export default Header;
