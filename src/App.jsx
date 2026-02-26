import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import ProductList from './components/ProductList';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
     
      <Navbar />
      
      <main>
        
        <Hero />
        <Features />
        <ProductList />
        
      </main>
      <Footer />
    </div>
  );
}

export default App;