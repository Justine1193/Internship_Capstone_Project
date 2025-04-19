import React from 'react';
import './styles/HeroSection.css';
import bgImage from '../../assets/neu_bg.jpg'; // <-- IMPORT the background image

const HeroSection = () => {
  return (
    <section 
      className="hero-section"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <h1>Empower Your Future</h1>
        <p>Connecting Students with Internship Opportunities</p>
        <button className="hero-button">Explore Internships</button>
      </div>
    </section>
  );
};

export default HeroSection;
