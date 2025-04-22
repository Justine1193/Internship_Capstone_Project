import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import InternshipList from './components/InternshipList';
import FooterSection from './components/FooterSection';
import styles from './components/styles/ClientDashboard.module.css';
import './themes.css';

const ClientDashboard = () => {
  const [theme, setTheme] = useState('light');
  const [filters, setFilters] = useState({ location: '', status: '', duration: '' });

  const [internships] = useState([
    {
      title: "Web Dev Intern",
      location: "Remote",
      status: "Open",
      duration: "2 months",
    },
    {
      title: "Marketing Intern",
      location: "Onsite",
      status: "Closed",
      duration: "3 months",
    },
    // add more dummy internships
  ]);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const filteredInternships = internships.filter(internship => {
    return (
      (!filters.location || internship.location === filters.location) &&
      (!filters.status || internship.status === filters.status) &&
      (!filters.duration || internship.duration === filters.duration)
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
          <label>
            Location:
            <select name="location" onChange={handleFilterChange}>
              <option value="">All</option>
              <option value="Remote">Remote</option>
              <option value="Onsite">Onsite</option>
            </select>
          </label>
          <label>
            Duration:
            <select name="duration" onChange={handleFilterChange}>
              <option value="">All</option>
              <option value="2 months">2 months</option>
              <option value="3 months">3 months</option>
            </select>
          </label>
          <label>
            Status:
            <select name="status" onChange={handleFilterChange}>
              <option value="">All</option>
              <option value="Open">Open</option>
              <option value="Closed">Closed</option>
            </select>
          </label>
        </aside>
        <section className={styles.internshipSection}>
          <h2>Internship Listings</h2>
          <InternshipList internships={filteredInternships} />
        </section>
      </main>
      <FooterSection />
    </div>
  );
};

export default ClientDashboard;
