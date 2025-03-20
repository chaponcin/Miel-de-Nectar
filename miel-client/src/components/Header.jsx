// src/components/Header.jsx
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="header">
      <h1>Mon Site</h1>
      <nav>
        <Link to="/">Accueil</Link>
        <Link to="/projects">Projets</Link>
      </nav>
    </header>
  );
}

export default Header;
