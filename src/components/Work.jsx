import React, { useState } from 'react';
import { UilArrowRight, UilTimes } from '@iconscout/react-unicons';
import { NavLink } from 'react-router-dom';

const workData = [
  {
    id: 1,
    category: 'web',
    img: 'https://i.postimg.cc/43Th5VXJ/work-1.png',
    title: 'Web Design',
    detailsTitle: 'The services we provide for design',
    description: 'Two smartphones displaying a sleek, dark-themed dashboard interface',
    created: '22 Apr 2025',
    technologies: 'html css',
    role: 'frontend',
    link: 'www.domain.com'
  },
  {
    id: 2,
    category: 'app',
    img: 'https://i.postimg.cc/sXLjnC5p/work-2.png',
    title: 'App Design',
    detailsTitle: 'Mobile App Lanfing Design & App Maintain',
    description: 'A stylish burger restaurant mobile app interface displayed on two smartphones',
    created: '15 Apr 2025',
    technologies: 'html css',
    role: 'frontend',
    link: 'www.domain.com'
  },
  {
    id: 3,
    category: 'design',
    img: 'https://i.postimg.cc/QNB1jXYZ/work-3.png',
    title: 'Brand Design',
    detailsTitle: 'Logo Design Creativity & Application',
    description: 'Three smartphone screens displaying a beautifully designed travel booking application interface',
    created: '10 Apr 2025',
    technologies: 'html css',
    role: 'frontend',
    link: 'www.domain.com'
  },
  {
    id: 4,
    category: 'app',
    img: 'https://i.postimg.cc/s2DGqyG8/work-4.png',
    title: 'App Design',
    detailsTitle: 'Mobile App Landing Design & Services',
    description: 'Modern workout website interface design featuring a bold and energetic visual layout',
    created: '4 Apr 2025',
    technologies: 'html css',
    role: 'frontend',
    link: 'www.domain.com'
  },
  {
    id: 5,
    category: 'web',
    img: 'https://i.postimg.cc/TYVyPhrF/work-5.png',
    title: 'Brand Design',
    detailsTitle: 'Design for Technology & Services',
    description: 'An app design that is clean, functional, and ideal for gamers looking to manage their digital assets and purchases',
    created: '28 Mar 2025',
    technologies: 'html css',
    role: 'frontend',
    link: 'www.domain.com'
  },
  {
    id: 6,
    category: 'design',
    img: 'https://i.postimg.cc/wMdqKcbv/work-6.png',
    title: 'Web Design',
    detailsTitle: 'App for Technology & Services',
    description: 'An app design that is clean and modern, making food browsing and ordering easy',
    created: '20 Mar 2025',
    technologies: 'html css',
    role: 'frontend',
    link: 'www.domain.com'
  }
];

const Work = () => {
  const [filter, setFilter] = useState('all');
  const [portfolioDetails, setPortfolioDetails] = useState(null);
  const [showDetails, setShowDetails] = useState(false);

  const handleFilter = (category) => {
    setFilter(category);
  };

  const handleShowDetails = (item) => {
    setPortfolioDetails(item);
    setShowDetails(true);
  };

  const filteredWork = filter === 'all'
    ? workData
    : workData.filter(item => item.category === filter);

  return (
    <section className="work section" id="work">
      <h2 className="section-title" data-heading="My Portfolio">Recent Works</h2>

      <div className="work-filters">
        <span
          className={`work-item ${filter === 'all' ? 'active-work' : ''}`}
          onClick={() => handleFilter('all')}
          data-filter="all"
        >
          All
        </span>
        <span
          className={`work-item ${filter === 'web' ? 'active-work' : ''}`}
          onClick={() => handleFilter('web')}
          data-filter="web"
        >
          Web
        </span>
        <span
          className={`work-item ${filter === 'app' ? 'active-work' : ''}`}
          onClick={() => handleFilter('app')}
          data-filter="app"
        >
          App
        </span>
        <span
          className={`work-item ${filter === 'design' ? 'active-work' : ''}`}
          onClick={() => handleFilter('design')}
          data-filter="design"
        >
          Design
        </span>
      </div>

      <div className="work-container container grid">
        {filteredWork.map((item) => (
          <div className={`work-card mix ${item.category}`} key={item.id}>
            <img src={item.img} alt="" className="work-img" />
            <h3 className="work-title">{item.title}</h3>
            <span className="work-button" onClick={() => handleShowDetails(item)}>
              Demo<UilArrowRight className="work-button-icon" />
            </span>
          </div>
        ))}
      </div>

      {showDetails && portfolioDetails && (
        <div className="portfolio-popup">
          <div className="portfolio-popup-inner">
            <div className="portfolio-popup-content grid">
              <span className="portfolio-popup-close" onClick={() => setShowDetails(false)}>
                <UilTimes />
              </span>
              <div className="pp-thumbnail">
                <img src={portfolioDetails.img} alt="" className="portfolio-popup-img" />
              </div>

              <div className="portfolio-popup-info">
                <div className="portfolio-popup-subtitle">Featured - <span>Design</span></div>
                <div className="portfolio-popup-body">
                  <h3 className="details-title">{portfolioDetails.detailsTitle}</h3>
                  <p className="details-description">{portfolioDetails.description}</p>

                  <ul className="details-info">
                    <li>Created - <span>{portfolioDetails.created}</span></li>
                    <li>Technologies - <span>{portfolioDetails.technologies}</span></li>
                    <li>Role - <span>{portfolioDetails.role}</span></li>
                    <li>View - <span><NavLink to="/" className="nav-logo-text">
                      {portfolioDetails.link}
                    </NavLink></span></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Work;