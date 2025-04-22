import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';
import profileImg from '../../assets/profile.png'; // replace with your avatar image

const Navbar = ({ onThemeToggle }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleDropdownToggle = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleLogout = () => {
    // Perform logout logic (clear localStorage, redirect, etc.)
    console.log('Logged out');
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>InternQuest</div>
      <ul className={styles.navLinks}>
        <li><Link to="/internships">Internships</Link></li>
        <li><Link to="/profile">My Profile</Link></li>
        <li>
          <button onClick={onThemeToggle} className={styles.themeToggle}>
            🌓 Toggle Mode
          </button>
        </li>
        <li className={styles.profileMenu} onClick={handleDropdownToggle}>
          <img src={profileImg} alt="profile" className={styles.avatar} />
          {dropdownOpen && (
            <ul className={styles.dropdown}>
              <li><Link to="/settings">Settings</Link></li>
              <li><button onClick={handleLogout}>Logout</button></li>
            </ul>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
