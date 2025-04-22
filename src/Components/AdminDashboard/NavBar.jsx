import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaClipboardList, FaUserGraduate, FaBook, FaMoon, FaSun } from 'react-icons/fa';
import styles from './Navbar.module.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(true);

  const handleLogout = () => {
    console.log("Logged out!");
  };

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    document.body.className = darkMode ? 'light' : 'dark'; // apply class to body
  };

  return (
    <nav className={`${styles.navbar} ${darkMode ? styles.dark : styles.light}`}>
      <div className={styles.logo}>InternQuest</div>

      <ul className={styles.navLinks}>
        <li>
          <Link to="/manage-internships">
            <FaClipboardList className={styles.icon} /> Manage Internships
          </Link>
        </li>
        <li>
          <Link to="/manage-students">
            <FaUserGraduate className={styles.icon} /> Manage Students
          </Link>
        </li>
        <li>
          <Link to="/manage-resources">
            <FaBook className={styles.icon} /> Manage Resources
          </Link>
        </li>
      </ul>

      <div className={styles.actions}>
        <button onClick={toggleTheme} className={styles.themeToggle}>
          {darkMode ? <FaSun /> : <FaMoon />}
        </button>

        <div className={styles.profile} onClick={() => setIsOpen(!isOpen)}>
          <img
            src="https://randomuser.me/api/portraits/men/75.jpg"
            alt="Admin"
            className={styles.avatar}
          />
          <span>Admin ▼</span>
          {isOpen && (
            <div className={styles.dropdown}>
              <button onClick={handleLogout}>Logout</button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
