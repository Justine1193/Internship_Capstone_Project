import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import './styles/Navbar.css';
import logo_light from '../../assets/logo-black.png';

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav className="navbar">
      <a href="/" className="logo-container">
        <img src={logo_light} alt="InternQuest" className="logo" />
      </a>

      <div className="navbar-actions">
        <Button 
          variant="outline-primary" 
          className="navbar-btn signup-btn" 
          onClick={() => navigate('/signup')}
        >
          Sign Up
        </Button>
        <Button 
          variant="primary" 
          className="navbar-btn login-btn" 
          onClick={() => navigate('/signin')}
        >
          Log In
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;