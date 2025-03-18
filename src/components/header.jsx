import React from 'react';
import './header.css'; 
import logo from '../assets/logo.png'; // Make sure to import the logo

function Header() {
  return (
    <header className="honey-header">
      <div className="logo">
        <img className="item-z" src={logo} alt="Rucher de Stoqueu Logo" />
      </div>
      <nav>
        <ul className="nav-list">
          <li className="item-a"><a href="/panier">Panier</a></li>
          <li className="item-b"><a href="/register">Register</a></li>
          <li className="item-c"><a href="/login">Login</a></li>
          <li className="item-e"><a href="/boutique">Boutique</a></li>
          <li className="item-d"><a href="/info">Qui sommes-nous</a></li>
          <li className="item-f"><a href="/contact">Contact</a></li>
        </ul>
      </nav>
      <div class="mondrian-container">
              <div class="block red"></div>
              <div class="block lightgrayone">Panier</div>
              <div class="block lightgraytwo">Register</div>
              <div class="block lightgraythree">Login</div>
              <div class="block blue">Boutique</div>
              <div class="block lightgrayfour">Qui sommes-nous</div>
              <div class="block yellow">Contact</div>
 
          </div>
    </header>
  );
}

export default Header;


