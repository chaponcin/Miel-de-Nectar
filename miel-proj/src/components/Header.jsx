import { Link } from 'react-router-dom';

function Header() {
  return (
    <header 
      className="header-bg h-60 flex justify-between items-start px-6 py-4"
    >
      <h1 className="text-xl font-bold text-black">
  <Link to="/" className="hover:underline">Titre</Link>
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
        <Link to="/quisommesnous" className="text-black">qui sommes-nous</Link>
        </li>
    </ul>
</nav>

    <nav className="flex items-center space-x-4">
        <Link to="/pannier">
          <img src="./src/assets/pannier.svg" alt="Panier" className="h-6" />
        </Link>
        <Link to="/register" className="text-black">Register</Link>
        <Link to="/login" className="text-black">Login</Link>
      </nav>
    </header>
  );
}

export default Header;
