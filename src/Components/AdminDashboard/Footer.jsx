import React from 'react';
import styles from './Footer.module.css';
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa';
import { AiOutlineGlobal } from "react-icons/ai";
import logo_dark from "../../assets/logo-white.png";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.footerLogo}>
          <a href="/" className={styles.logoContainer}>
            <img src={logo_dark} alt="InternQuest" className={styles.logo} />
          </a>
        </div>

        <div className={styles.footerSocials}>
          <a href="#"><FaFacebookF /></a>
          <a href="#"><AiOutlineGlobal /></a>
          <a href="#"><FaLinkedinIn /></a>
        </div>
      </div>

      <div className={styles.footerBottom}>
        <p>© {new Date().getFullYear()} InternQuest. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
