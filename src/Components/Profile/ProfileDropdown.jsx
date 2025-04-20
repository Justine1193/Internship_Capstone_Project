import styles from "./ProfileDropdown.module.css";
("use client");
import * as React from "react";

function ProfileDropdown() {
  return (
    <div className={styles.dropdownContainer}>
      <div className={styles.userInfoSection}>
        <img src="https://cdn.builder.io/api/v1/image/assets/9397be3a9c734b2aa759b5c45301270f/b57660d970a430751bc00d3ffb770d2331ec1a74?placeholderIfAbsent=true" alt="User avatar" className={styles.userAvatar} />
        <div className={styles.userDetails}>
          <div className={styles.userName}>User name</div>
          <div className={styles.userEmail}>example@gmail.com</div>
        </div>
      </div>
      <img src="https://cdn.builder.io/api/v1/image/assets/9397be3a9c734b2aa759b5c45301270f/402f9bd19b0d3255cfd43507f2ce8022b7814143?placeholderIfAbsent=true" className={styles.divider} />
      <nav className={styles.menuSection}>
        <button className={styles.menuItem}>
          <img src="https://cdn.builder.io/api/v1/image/assets/9397be3a9c734b2aa759b5c45301270f/cd64881924191c38c5d40949fd04cb37c70a7203?placeholderIfAbsent=true" alt="" className={styles.menuIcon} />
          <span className={styles.menuText}>Edit profile</span>
        </button>
        <button className={styles.menuItem}>
          <img src="https://cdn.builder.io/api/v1/image/assets/9397be3a9c734b2aa759b5c45301270f/cbde743b585f36fee01d7af8bc21ea2923eaf387?placeholderIfAbsent=true" alt="" className={styles.menuIcon} />
          <span className={styles.menuText}>Preferences</span>
        </button>
      </nav>
      <img src="https://cdn.builder.io/api/v1/image/assets/9397be3a9c734b2aa759b5c45301270f/402f9bd19b0d3255cfd43507f2ce8022b7814143?placeholderIfAbsent=true" className={styles.divider} />
      <div className={styles.themeToggleContainer}>
        <div className={styles.menuItem}>
          <img src="https://cdn.builder.io/api/v1/image/assets/9397be3a9c734b2aa759b5c45301270f/9f3f8d45e006e1bfe245127ab1af0c3ed1ffe223?placeholderIfAbsent=true" alt="" className={styles.menuIcon} />
          <span className={styles.menuText}>Night mode</span>
        </div>
        <button className={styles.themeToggle}>
          <div className={styles.toggleHandle} />
        </button>
      </div>
      <img src="https://cdn.builder.io/api/v1/image/assets/9397be3a9c734b2aa759b5c45301270f/402f9bd19b0d3255cfd43507f2ce8022b7814143?placeholderIfAbsent=true" className={styles.divider} />
      <nav className={styles.menuSection}>
        <button className={styles.menuItem}>
          <img src="https://cdn.builder.io/api/v1/image/assets/9397be3a9c734b2aa759b5c45301270f/fd68c9be037a78ebdde317dbe7e4f4077911f432?placeholderIfAbsent=true" alt="" className={styles.menuIcon} />
          <span className={styles.menuText}>Help center</span>
        </button>
      </nav>
      <nav className={styles.menuSection}>
        <button className={styles.menuItem}>
          <img src="https://cdn.builder.io/api/v1/image/assets/9397be3a9c734b2aa759b5c45301270f/c37eea86de5f1dea52c1d62afca835da83df28cc?placeholderIfAbsent=true" alt="" className={styles.menuIcon} />
          <span className={styles.menuText}>Sign out</span>
        </button>
      </nav>
    </div>
  );
}

export default ProfileDropdown;
