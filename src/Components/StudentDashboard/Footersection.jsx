import React from 'react';
import './styles/FooterSection.css';
import { FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa'; // Optional: for social media icons
import { AiOutlineGlobal } from "react-icons/ai";
import logo_dark from "../../assets/logo-white.png"


function FooterSection() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Logo or Name */}
        <div className="footer-logo">
          <a href="/" className="logo-container">
                  <img src={logo_dark} alt="InternQuest" className="logo" />
                </a>
        </div>

        {/* Social Media (Optional) */}
        <div className="footer-socials">
          <a href="#"><FaFacebookF /></a>
          <a href="#"><AiOutlineGlobal /></a>
          <a href="#"><FaLinkedinIn /></a>
        </div>
      </div>

      {/* Copyright */}
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} InternQuest. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default FooterSection;
