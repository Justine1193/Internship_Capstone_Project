import React, { useState, useEffect } from 'react';
import Navbar from "./Navbar";
import InternshipList from "./InternshipList";
import FooterSection from "./Footersection";
import styles from './styles/ClientDashboard.module.css';

import { db } from "../../firebase";
import { ref, onValue } from "firebase/database";

const ClientDashboard = () => {
  const [theme, setTheme] = useState('light');
  const [filters, setFilters] = useState({ location: 'All', status: 'All', duration: 'All' });
  const [internships, setInternships] = useState([]);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  useEffect(() => {
    const internshipRef = ref(db, "internships");
    onValue(internshipRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const internshipArray = Object.values(data);
        setInternships(internshipArray);
      }
    });
  }, []);

  const filteredInternships = internships.filter(internship => {
    return (
      (filters.location === 'All' || internship.location === filters.location) &&
      (filters.status === 'All' || internship.status === filters.status) &&
      (filters.duration === 'All' || internship.duration === filters.duration)
    );
  });

  const handleFilterChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  return (
    <div className={styles.dashboardWrapper}>
      <Navbar onThemeToggle={() => setTheme(theme === 'light' ? 'dark' : 'light')} />
      <main className={styles.mainContent}>
        <aside className={styles.filterSection}>
          <h4>Filter Internships</h4>

          <div className={styles.filterGroup}>
            <label>Location:</label>
            <select name="location" value={filters.location} onChange={handleFilterChange}>
              <option value="All">All</option>
              <option value="Remote">Remote</option>
              <option value="Onsite">Onsite</option>
            </select>
          </div>

          <div className={styles.filterGroup}>
            <label>Duration:</label>
            <select name="duration" value={filters.duration} onChange={handleFilterChange}>
              <option value="All">All</option>
              <option value="2 months">2 months</option>
              <option value="3 months">3 months</option>
            </select>
          </div>

          <div className={styles.filterGroup}>
            <label>Status:</label>
            <select name="status" value={filters.status} onChange={handleFilterChange}>
              <option value="All">All</option>
              <option value="Open">Open</option>
              <option value="Closed">Closed</option>
            </select>
          </div>

        </aside>

        <section className={styles.internshipSection}>
          <h2>Internship Listings</h2>
          {filteredInternships.length > 0 ? (
            <InternshipList internships={filteredInternships} />
          ) : (
            <p>No internships available.</p>
          )}
        </section>
      </main>
      <FooterSection />
    </div>
  );
};

export default ClientDashboard;
