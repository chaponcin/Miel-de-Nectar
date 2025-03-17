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

          </section>
        </main>

        <Footer />  
      </div>
    </>
  );
}

export default App;
