import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

function Header() {
  const { isLoggedIn, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <header className="footer-bg fixed top-0 left-0 w-full z-50 h-20 flex justify-between items-center px-6 py-2 bg-white bg-cover bg-center shadow-md">
      <h1 className="text-xl font-bold text-black">
        <Link to="/">
          <img src="./src/assets/appi.png" className="h-16" />
        </Link>
      </h1>

      <nav>
        <ul className="flex items-center space-x-4">
          <li><Link to="/" className="text-black">Home</Link></li>
          <li><Link to="/Boutique" className="text-black">Boutique</Link></li>
          <li><Link to="/Contact" className="text-black">Contact</Link></li>
          <li><Link to="/quisommesnous" className="text-black">Qui sommes-nous</Link></li>
        </ul>
      </nav>

      <nav className="flex items-center space-x-4">
        <Link to="/pannier">
          <img src="./src/assets/pannier.svg" alt="Panier" className="h-6" />
        </Link>

        {!isLoggedIn ? (
          <>
            <Link to="/register" className="text-black">Inscription</Link>
            <Link to="/login" className="text-black">Connexion</Link>
          </>
        ) : (
        <>
          <Link to="/profile" className="text-black">Mon Compte</Link>
          <button onClick={handleLogout} className="text-red-500 font-bold hover:underline">Déconnexion</button>
        </>
        )}
      </nav>
    </header>
  );
}

export default Header;
