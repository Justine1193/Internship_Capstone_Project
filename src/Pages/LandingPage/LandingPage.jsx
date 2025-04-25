import React from "react";
import FooterSection from "../../Components/LandingPageComponents/FooterSection.jsx";
import HeroSection from "../../Components/LandingPageComponents/HeroSection.jsx";
import Navbar from "../../Components/LandingPageComponents/Navbar.jsx";
import StepSection from "../../Components/LandingPageComponents/StepSection.jsx";

const LandingPage = () => {
  return (
    <>
    
      <Navbar />
      <HeroSection />
      <StepSection />
      <FooterSection />
    </>
  );
};

export default LandingPage;
