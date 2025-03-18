import React from 'react';
import './header.css'; 
import logo from '../assets/logo.png'; 

function Header() {
  return (
    <header className="honey-header">
      <div className="logo">
        <img className="red" src={logo} alt="Rucher de Stoqueu Logo" />
      </div>
      <nav>
        <ul className="nav-list mondrian-container">
          <li className="lightgrayone"><a href="/panier">Panier</a></li>
          <li className="lightgraytwo"><a href="/register">Register</a></li>
          <li className="lightgraythree"><a href="/login">Login</a></li>
          <li className="blue"><a href="/boutique">Boutique</a></li>
          <li className="lightgrayfour"><a href="/info">Qui sommes-nous</a></li>
          <li className="yellow"><a href="/contact">Contact</a></li>
        </ul>
      </nav>

    </header>
  );
}

export default Header;


