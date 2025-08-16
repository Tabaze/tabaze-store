import React from 'react';
import { UilUser, UilNavigator, UilFacebookMessenger, UilWhatsapp, UilEnvelopeEdit } from '@iconscout/react-unicons';
import { UilFacebookF, UilInstagram, UilTwitter } from '@iconscout/react-unicons';

import background from '../assets/images/backgroud.png'; 
const Home = () => {
  return (
    <section className="home section" id="home">
      <div className="home-container container grid">
        <div className="home-social">
          <span className="home-social-follow">Follow Me</span>
          <div className="home-social-links">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="home-social-link">
              <UilFacebookF />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="home-social-link">
              <UilInstagram />
            </a>
            <a href="https://www.x.com" target="_blank" rel="noopener noreferrer" className="home-social-link">
              <UilTwitter />
            </a>
          </div>
        </div>

        <img src={background} alt="" className="home-img" />   

        <div className="home-data">
          <h1 className="home-title">Tabaze Store</h1>
          <h3 className="home-subtitle">Clothing Store</h3>
          <p className="home-description">We have the greatest clothes with unique designs</p>
          <a href="#about" className="button">
            <UilUser className="button-icon" />
            More About us!
          </a>
        </div>

        <div className="my-info">
          <div className="info-item">
            <UilFacebookMessenger className="info-icon" />
            <div>
              <h3 className="info-title">Messenger</h3>
              <span className="info-subtitle">user.fb123</span>
            </div>
          </div>

          <div className="info-item">
            <UilWhatsapp className="info-icon" />
            <div>
              <h3 className="info-title">Whatsapp</h3>
              <span className="info-subtitle">999-888-777</span>
            </div>
          </div>

          <div className="info-item">
            <UilEnvelopeEdit className="info-icon" />
            <div>
              <h3 className="info-title">Email</h3>
              <span className="info-subtitle">user@gmail.com</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;