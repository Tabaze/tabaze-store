import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Store from './components/Store';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import ProductCard from './components/product/ProductCard';
import Cart from './components/CartSidebar/Cart';
import Checkout from './components/Checkout/Checkout';
import "./App.css";

function AppContent() {
  const location = useLocation();

  // Hide footer on /checkout page
  const hideFooter = location.pathname === '/checkout';

  return (
    <div className="App">
      <Navbar />
      <Cart /> {/* Always visible */}
      <main className="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/shop" element={<Store />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/product/:id" element={<ProductCard />} />
        </Routes>
      </main>
      {!hideFooter && <Footer />}
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
