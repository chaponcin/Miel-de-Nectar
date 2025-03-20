import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Accueil from './pages/accueil';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Accueil />} />

      </Routes>
    </Router>
  );
};

export default App;






