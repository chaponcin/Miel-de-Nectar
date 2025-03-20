// src/components/Footer.jsx
import React from 'react';
import './footer.css';  // Import the footer.css file

import logo from '../assets/logo.png'; // Adjust path to the logo image

function Footer() {
  return (
    <footer className="honey-footer">
      <div className="logo">
        <img src={logo} alt="Rucher de Stoqueu Logo" />
      </div>
      <p>Où nous trouver?</p>
    </footer>
  );
}

export default Footer;
