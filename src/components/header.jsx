// src/components/Header.jsx
import React from 'react';
import './header.css'; 
import logo from '../assets/logo.png'; // Adjust path to the logo image

function Header() {
  return (
    <header className="honey-header">
      <div className="logo">
        <img src={logo} alt="Rucher de Stoqueu Logo" />
      </div>
      <nav>
        <ul className="nav-list">
          <li><a href="/panier">Panier</a></li>
          <li><a href="/register">Register</a></li>
          <li><a href="/login">Login</a></li>
          <li><a href="/">Acceuil</a></li>
          <li><a href="/boutique">Boutique</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;


