// src/App.jsx
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Login from './pages/login';
import Register from './pages/register';
import Pannier from './pages/pannier';
import Boutique from './pages/boutique';
import Contact from './pages/contact';
import User from './pages/user';
import QuiSommesNous from './pages/quisommesnous';
import './App.css';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 bg-white-100 p-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pannier" element={<Pannier />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/boutique" element={<Boutique />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/quisommesnous" element={<QuiSommesNous />} />
          <Route path="/user" element={<User />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
