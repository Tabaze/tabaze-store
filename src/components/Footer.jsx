import React from 'react';
import { UilFacebookF, UilInstagram, UilTwitter } from '@iconscout/react-unicons';

import { NavLink } from 'react-router-dom';
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-bg">
        <div className="footer-container container grid">
          <div>
            <h1 className="footer-title">Tabaze Store</h1>
            <span className="footer-subtitle">Clothing Store</span>
          </div>

          <ul className="footer-links">
            <li>
              <NavLink to="/services"  className="footer-link">Services</NavLink>
            </li>
            <li>
              <NavLink to="/work" className="footer-link">Work</NavLink>
            </li>
            <li>
              <NavLink to="/contact" className="footer-link">Contact</NavLink>
            </li>
          </ul>

          <div className="footer-socials">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="footer-social">
              <UilFacebookF />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="footer-social">
              <UilInstagram />
            </a>
            <a href="https://www.x.com" target="_blank" rel="noopener noreferrer" className="footer-social">
              <UilTwitter />
            </a>
          </div>
        </div>

        <p className="footer-copy">&#169; <a href="https://codepen.io/leonam-silva-de-souza">ULTRA CODE</a>. All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;