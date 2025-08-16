import React, { useState } from 'react';
import { 
  UilWebGrid, 
  UilArrow, 
  UilEdit, 
  UilArrowRight, 
  UilTimes, 
  UilCheckCircle 
} from '@iconscout/react-unicons';

const servicesData = [
  {
    icon: <UilWebGrid className="services-icon" />,
    title: "Web Designer",
    description: "I offer services with more than 3 years of experience with quality work to clients and companies",
    services: [
      "User Interface Development",
      "Web Page Development",
      "Interactive UX/UI Creations",
      "Company Brand Positioning",
      "Design and Mockup of products for companies"
    ]
  },
  {
    icon: <UilArrow className="services-icon" />,
    title: "UI/UX Designer",
    description: "I offer services with more than 5 years of experience with quality work to clients and companies",
    services: [
      "Usability Testing",
      "User Research",
      "Interaction Design",
      "Responsive Design",
      "Branding & Style Guides",
      "Accessibility",
      "A/B Testing"
    ]
  },
  {
    icon: <UilEdit className="services-icon" />,
    title: "Branding Designer",
    description: "I offer services with more than 2 years of experience with quality work to clients and companies",
    services: [
      "Competitive Analysis",
      "Accessibility Design",
      "Project Management",
      "Iteration and Refinement",
      "Presenting Designs",
      "User Research",
      "Surveys & Questionnaires"
    ]
  }
];

const Services = () => {
  const [activeModal, setActiveModal] = useState(null);

  const handleShowModal = (index) => {
    setActiveModal(index);
  };

  const handleCloseModal = () => {
    setActiveModal(null);
  };

  return (
    <section className="services section" id="services">
      <h2 className="section-title" data-heading="Services">What I Offer</h2>

      <div className="services-container container grid">
        {servicesData.map((service, index) => (
          <div className="services-content" key={index}>
            <div>
              {service.icon}
              <h3 className="services-title">{service.title}</h3>
            </div>

            <span className="services-button" onClick={() => handleShowModal(index)}>
              View More <UilArrowRight className="services-button-icon" />
            </span>

            {activeModal === index && (
              <div className="services-modal">
                <div className="services-modal-content">
                  <UilTimes className="services-modal-close" onClick={handleCloseModal} />

                  <h3 className="services-modal-title">{service.title}</h3>
                  <p className="services-modal-description">{service.description}</p>

                  <ul className="services-modal-services grid">
                    {service.services.map((item, i) => (
                      <li className="services-modal-service" key={i}>
                        <UilCheckCircle className="services-modal-icon" />
                        <p className="services-modal-info">{item}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;