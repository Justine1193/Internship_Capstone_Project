import React from 'react';
import './FooterSection.css';
import { FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa';
import { AiOutlineGlobal } from 'react-icons/ai';
import logo_dark from '../../assets/logo-white.png';

function FooterSection() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-newsletter">
          <h4>Subscribe to our newsletter</h4>
          <form className="newsletter-form">
            <input type="email" placeholder="Input your email" />
            <button type="submit">Subscribe</button>
          </form>
        </div>

        <div className="footer-callout">
          <p><strong>Would you like to talk about your future project?</strong></p>
          <button className="footer-btn">Let’s Talk</button>
        </div>
      </div>

      <div className="footer-container">
        <div className="footer-logo">
          <a href="/" className="logo-container">
            <img src={logo_dark} alt="InternQuest" className="logo" />
          </a>
        </div>

        <div className="footer-links">
          <a href="#">About Us</a>
          <a href="#">Features</a>
          <a href="#">Help Center</a>
          <a href="#">Contact Us</a>
          <a href="#">FAQs</a>
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
}

export default FooterSection;
