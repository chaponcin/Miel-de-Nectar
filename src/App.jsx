import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';  
import Footer from './components/Footer';  

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <Header /> 
        
        <main>
          <section>
            <h2>Miel 100% local et artisanal</h2>
          </section>
        </main>

        <Footer />  
      </div>
    </>
  );
}

export default App;
