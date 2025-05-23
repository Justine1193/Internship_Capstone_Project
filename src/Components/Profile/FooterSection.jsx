import React from 'react';
import './styles/FooterSection.css';
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa';
import { AiOutlineGlobal } from "react-icons/ai";
import logo_dark from '../assets/logo-white.png';

const FooterSection = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <a href="/" className="logo-container">
            <img src={logo_dark} alt="InternQuest" className="logo" />
          </a>
        </div>
        <div className="footer-socials">
          <a href="#"><FaFacebookF /></a>
          <a href="#"><AiOutlineGlobal /></a>
          <a href="#"><FaLinkedinIn /></a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} InternQuest. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default FooterSection;
