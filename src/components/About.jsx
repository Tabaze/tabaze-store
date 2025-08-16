import React from 'react';
import { UilAward, UilSuitcaseAlt, UilHeadphonesAlt, UilNavigator } from '@iconscout/react-unicons';

const About = () => {
  return (
    <section className="about section" id="about">
      <h2 className="section-title" data-heading="My Intro">About me</h2>

      <div className="about-container container grid">
        <img src="../assests/images/backgroung.png" alt="" className="about-img" />

        <div className="about-data">
          <h3 className="about-heading">Hi, I'm Mariam Wallas, based in Canada</h3>
          <p className="about-description">I'm a web developer, with extensive knowledge and years of experience, working with quality work in web technologies, UI and UX design</p>

          <div className="about-info">
            <div className="about-box">
              <UilAward className="about-icon" />
              <h3 className="about-title">Experience</h3>
              <span className="about-subtitle">10 + Years</span>
            </div>

            <div className="about-box">
              <UilSuitcaseAlt className="about-icon" />
              <h3 className="about-title">Completed</h3>
              <span className="about-subtitle">60 + Projects</span>
            </div>

            <div className="about-box">
              <UilHeadphonesAlt className="about-icon" />
              <h3 className="about-title">Support</h3>
              <span className="about-subtitle">Online 24/7</span>
            </div>
          </div>

          <a href="#contact" className="button">
            <UilNavigator className="button-icon" />
            Contact me
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;