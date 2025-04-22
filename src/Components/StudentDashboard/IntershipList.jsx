import React from 'react';
import styles from './styles/InternshipList.module.css';

const InternshipList = ({ internships }) => {
  return (
    <div className={styles.list}>
      {internships.map((item) => (
        <div className={styles.card} key={item.id}>
          <div className={styles.logo}>
            <img src="/logos/emerson-logo.png" alt="company" />
          </div>
          <div className={styles.details}>
            <h3>{item.title}</h3>
            <p><strong>{item.company}</strong> • {item.location} • {item.duration}</p>
            <p>⭐ {item.rating}</p>
            <button className={styles.viewBtn}>View</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default InternshipList;
