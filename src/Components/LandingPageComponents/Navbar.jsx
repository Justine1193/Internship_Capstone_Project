import React from 'react'
import Button from 'react-bootstrap/Button'
import './Navbar.css'
import logo_light from "../../assets/logo-black.png"

const Navbar = () => {
  return (
    <nav className="navbar">

      <a href="/" className="logo-container">
        <img src={logo_light} alt="InternQuest" className="logo" />
      </a>

      <div className="navbar-actions">
        <Button variant="outline-secondary" className="navbar-btn signup-btn">
          Sign Up
        </Button>
        <Button variant="primary" className="navbar-btn login-btn">
          Log In
        </Button>
      </div>
    </nav>

  )
}

export default Navbar