import React from 'react';
import { 
  UilEnvelopeEdit, 
  UilWhatsapp, 
  UilFacebookMessenger, 
  UilArrowRight,
  UilNavigator
} from '@iconscout/react-unicons';

const Contact = () => {
  return (
    <section className="contact section" id="contact">
      <h2 className="section-title" data-heading="Get in Touch">Contact me</h2>

      <div className="contact-container container grid">
        <div className="contact-content">
          <div className="contact-info">
            <div className="contact-card">
              <UilEnvelopeEdit className="contact-card-icon" />
              <h3 className="contact-card-title">Email</h3>
              <span className="contact-card-data">user@gmail.com</span>
              <span className="contact-button">
                Write me <UilArrowRight className="contact-button-icon" />
              </span>
            </div>

            <div className="contact-card">
              <UilWhatsapp className="contact-card-icon" />
              <h3 className="contact-card-title">Whatsapp</h3>
              <span className="contact-card-data">999-888-777</span>
              <span className="contact-button">
                Write me <UilArrowRight className="contact-button-icon" />
              </span>
            </div>

            <div className="contact-card">
              <UilFacebookMessenger className="contact-card-icon" />
              <h3 className="contact-card-title">Messenger</h3>
              <span className="contact-card-data">user.fb123</span>
              <span className="contact-button">
                Write me <UilArrowRight className="contact-button-icon" />
              </span>
            </div>
          </div>
        </div>

        <div className="contact-content">
          <form action="" className="contact-form">
            <div className="input-container">
              <input type="text" className="input" />
              <label>Username</label>
              <span>Username</span>
            </div>

            <div className="input-container">
              <input type="email" className="input" />
              <label>Email</label>
              <span>Email</span>
            </div>

            <div className="input-container">
              <input type="tel" className="input" />
              <label>Phone</label>
              <span>Phone</span>
            </div>

            <div className="input-container textarea">
              <textarea className="input"></textarea>
              <label>Message</label>
              <span>Message</span>
            </div>

            <button type="submit" className="button">
              <UilNavigator className="button-icon" />
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;