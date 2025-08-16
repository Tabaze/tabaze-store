import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Qualifications from './components/Qualifications';
import Skills from './components/Skills';
import Work from './components/Work';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import "./App.css"

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
                <About />
                <Qualifications />
                <Skills />
                <Work />
                <Services />
                <Testimonials />
                <Contact />
              </>
            } />
            <Route path="/about" element={<About />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/work" element={<Work />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;