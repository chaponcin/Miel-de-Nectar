// src/pages/Home.jsx
import { useState } from 'react';
import Modal from '../components/Modal';

function Welcome() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <h1>Bienvenue sur mon site</h1>
      <button onClick={() => setIsOpen(true)}>Ouvrir la box</button>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </div>
  );
}

function Home() {
  return (
    <section className="home">
      <Welcome />
    </section>
  );
}

export default Home;
