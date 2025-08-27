import React from "react";
import {
  UilFacebookF,
  UilInstagram,
  UilTwitter,
  UilFacebookMessenger,
  UilWhatsapp,
  UilEnvelopeEdit,
} from "@iconscout/react-unicons";
import background from "../../assets/images/backgroud.png"; // adjust path as needed
import "./HomeSection.css";
import { NavLink } from "react-router-dom";

const HomeSection = () => {
  return (
    <section className="home section">
      <div className="home-container container grid">

        {/* Social Links */}
        <div className="home-social">
          <span className="home-social-follow">Follow Us</span>
          <div className="home-social-links">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="home-social-link"
            >
              <UilFacebookF />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="home-social-link"
            >
              <UilInstagram />
            </a>
            <a
              href="https://www.x.com"
              target="_blank"
              rel="noopener noreferrer"
              className="home-social-link"
            >
              <UilTwitter />
            </a>
          </div>
        </div>

        {/* Main Image */}
        <img src={background} alt="home" className="home-img" />

        {/* home Text Data */}
        <div className="home-data">
          <h1 className="home-title">Tabaze Store</h1>
          <h3 className="home-subtitle">Clothing Store</h3>
          <p className="home-description">
            We have the greatest clothes with unique designs
          </p>
          <div className="home-buttons">
            <NavLink
              to="/shop"
              end className="button"
            >
              Shop Now
            </NavLink>&nbsp;
            <NavLink
              to="/new"
              end className="button"
            >
              New Arrivals
            </NavLink>
          </div>
        </div>

        {/* Contact Info */}
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

export default HomeSection;
