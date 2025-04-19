import React from "react";
import "./LandingPage.css";
import FooterSection from "../../Components/LandingPageComponents/FooterSection.jsx";
import HeroSection from "../../Components/LandingPageComponents/HeroSection.jsx";
import Navbar from "../../Components/LandingPageComponents/Navbar.jsx";
import StepSection from "../../Components/LandingPageComponents/StepSection.jsx";

const LandingPage = () => {
  return (
    <>
    
      <Navbar />
      <div className="landingPage.css">
      <HeroSection />
      <StepSection />
      <FooterSection />
      </div>
    </>
  );
};

export default LandingPage;
