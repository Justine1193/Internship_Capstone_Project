import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { FaClipboardList, FaUserGraduate, FaBook, FaMoon, FaSun } from 'react-icons/fa';
import styles from './Navbar.module.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    document.body.className = darkMode ? 'dark' : 'light';
  }, [darkMode]);

  const handleLogout = () => {
    console.log("Logged out!");
  };

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <nav className={`${styles.navbar} ${darkMode ? styles.dark : styles.light}`}>
      <div className={styles.logo}>InternQuest</div>

      <ul className={styles.navLinks}>
        <li>
          <NavLink 
            to="/manage-internships" 
            className={({ isActive }) => isActive ? styles.active : undefined}
          >
            <FaClipboardList className={styles.icon} /> Manage Internships
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/manage-students" 
            className={({ isActive }) => isActive ? styles.active : undefined}
          >
            <FaUserGraduate className={styles.icon} /> Manage Students
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/manage-resources" 
            className={({ isActive }) => isActive ? styles.active : undefined}
          >
            <FaBook className={styles.icon} /> Manage Resources
          </NavLink>
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
