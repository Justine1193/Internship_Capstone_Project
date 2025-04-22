import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import InternshipList from './components/InternshipList';
import FooterSection from './components/FooterSection';
import styles from './components/styles/ClientDashboard.module.css';
import './themes.css'; // global theme CSS

const ClientDashboard = () => {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <div className={styles.dashboardWrapper}>
      <Navbar onThemeToggle={() => setTheme(theme === 'light' ? 'dark' : 'light')} />
      <main className={styles.mainContent}>
        <aside className={styles.filterSection}>
          <h4>FILTERS (to be implemented)</h4>
        </aside>
        <section className={styles.internshipSection}>
          <h2>Internship Listings</h2>
          <InternshipList />
        </section>
      </main>
      <FooterSection />
    </div>
  );
};

export default ClientDashboard;
