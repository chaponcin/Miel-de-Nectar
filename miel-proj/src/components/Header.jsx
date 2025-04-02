import { Link } from 'react-router-dom';

function Header() {
  return (
    <header 
    className="footer-bg h-20 w-3/4 mx-auto flex justify-between items-center px-6 py-2 bg-cover bg-center rounded-lg shadow-md"
  >
      <h1 className="text-xl font-bold text-black">
  <Link to="/">
  <img src="./src/assets/pot-accueil.svg" className="h-16"/>
  </Link>
</h1>

<nav>
    <ul className="flex items-center space-x-4">
        <li>
        <Link to="/" className="text-black">Home</Link>
        </li>
        <li>
        <Link to="/Boutique" className="text-black">Boutique</Link>
        </li>
        <li>
        <Link to="/Contact" className="text-black">Contact</Link>
        </li>
        <li>
        <Link to="/quisommesnous" className="text-black">Qui sommes-nous</Link>
        </li>
    </ul>
</nav>

    <nav className="flex items-center space-x-4">
        <Link to="/pannier">
          <img src="./src/assets/pannier.svg" alt="Panier" className="h-6" />
        </Link>
        <Link to="/register" className="text-black">Inscription</Link>
        <Link to="/login" className="text-black">Connexion</Link>
    </nav>
    </header>
  );
}

export default Header;
