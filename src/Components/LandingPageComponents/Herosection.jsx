import React from 'react';
import './HeroSection.css';  // link to the CSS file
import bgImage from '../../assets/neu_bg.jpg'; // your background image path

function HeroSection() {
  return (
    <section className="hero-section">
  <div className="hero-overlay"></div> {/* Overlay layer */}
  <div className="hero-content">
    <h1>Empower Your Future</h1>
    <p>Connecting Students with Internship Opportunities</p>
    <button className="hero-button">Explore Internships</button>
  </div>
</section>
  );
}

export default HeroSection;