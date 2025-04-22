import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';
import styles from '../styles/ClientNavbar.module.css';

const ClientNavbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleToggle = () => setDropdownOpen(!dropdownOpen);

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>InternQuest</div>
      <ul className={styles.navLinks}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/internships">Internships</Link></li>
      </ul>
      <div className={styles.accountSection} onClick={handleToggle}>
        <FaUserCircle size={22} />
        <span className={styles.username}>Amanda Smith</span>
        <span className={styles.caret}>▼</span>

        {dropdownOpen && (
          <div className={styles.dropdown}>
            <Link to="/profile">My Profile</Link>
            <Link to="/settings">Settings</Link>
            <hr />
            <button onClick={() => alert('Logging out...')}>Logout</button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default ClientNavbar;
