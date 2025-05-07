import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

function Header() {
  const { isLoggedIn, logout } = useAuth();
  const navigate = useNavigate();
  
  const handleLogout = () => {
    logout();
    navigate('/');
  };

  // Function to handle the hamburger menu click and navigate to a new page
  const handleHamburgerClick = () => {
    navigate('/menu'); // Replace '/your-new-page' with the desired route
  };

  return (
    <header className="footer-bg fixed top-0 left-0 w-full z-50 px-6 bg-cover bg-center bg-transparent top-[-40px]">
      <div className="flex justify-between items-start">
        <h1 className="text-xl font-bold text-black mt-1 py-10">
          <Link to="/">
            <img src="./src/assets/logo.png" className="h-14 " alt="Logo" />
          </Link>
        </h1>

        {/* Hamburger button (visible on small screens) */}
        <button
          className="md:hidden text-black mt-2 py-10"
          onClick={handleHamburgerClick} // Call the function to navigate when the hamburger is clicked
        >
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-start space-x-4 mt-2 py-10">
          <Link to="/" className="text-black">Home</Link>
          <Link to="/Boutique" className="text-black">Boutique</Link>
          <Link to="/recettes" className="text-black">Recettes</Link>
          <Link to="/Contact" className="text-black">Contact</Link>
        </nav>

        

        <nav className="hidden md:flex items-start space-x-4 mt-2 py-10">
          <Link to="/pannier">
            <img src="./src/assets/pannier.svg" alt="Panier" className="h-6" />
          </Link>

          {!isLoggedIn ? (
            <>
              <Link to="/inscription" className="text-white bg-black hover:bg-green-900 font-bold px-2 py-1 rounded-lg transition">Inscription</Link>
              <Link to="/connexion" className="text-white bg-black hover:bg-green-900 font-bold px-2 py-1 rounded-lg transition">Connexion</Link>
            </>
          ) : (
            <>
              <Link to="/profile" className="text-white bg-black hover:bg-green-900 font-bold px-2 py-1 rounded-lg transition">Mon Compte</Link>
              <button
                onClick={handleLogout}
                className="text-white bg-red-600 hover:bg-red-700 font-bold px-2 py-1 rounded-lg transition"
              >
                Déconnexion
              </button>
            </>
          )}
        </nav>
      </div>

      {/* Mobile Navigation Menu */}
      {false && ( // Set to false to avoid showing the mobile menu
        <div className="md:hidden mt-2 flex flex-col space-y-2 bg-[#fafafa]">
          <Link to="/" className="text-black">Home</Link>
          <Link to="/Boutique" className="text-black">Boutique</Link>
          <Link to="/quisommesnous" className="text-black">Recettes</Link>
          <Link to="/Contact" className="text-black">Contact</Link>
          <Link to="/pannier">
            <img src="./src/assets/pannier.svg" alt="Panier" className="h-6" />
          </Link>
          {!isLoggedIn ? (
            <>
              <Link to="/register" className="text-white bg-black hover:bg-green-900 font-bold px-2 py-1 rounded-lg transition">Inscription</Link>
              <Link to="/login" className="text-white bg-black hover:bg-green-900 font-bold px-2 py-1 rounded-lg transition">Connexion</Link>
            </>
          ) : (
            <>
              <Link to="/profile" className="text-white bg-black hover:bg-green-900 font-bold px-2 py-1 rounded-lg transition">Mon Compte</Link>
              <button
                onClick={() => {
                  handleLogout();
                  // setMobileMenuOpen(false); // No need to close menu, as it's not opening
                }}
                className="text-white bg-red-600 hover:bg-red-700 font-bold px-2 py-1 rounded-lg transition"
              >
                Déconnexion
              </button>
            </>
          )}
        </div>
      )}
    </header>
  );
}

export default Header;
