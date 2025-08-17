import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Store from './components/Store';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import "./App.css"
import ProductCard from './components/product/ProductCard';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <main className="main">
          <Routes>
            <Route path="/" element={
              <>
                <Home />
              </>
            } />
            <Route path="/about" element={<About />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/shop" element={<Store />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/product/:id" element={<ProductCard />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;