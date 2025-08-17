import React, { useState } from 'react';
import { UilArrowRight, UilTimes, UilShoppingCart } from '@iconscout/react-unicons';
import { NavLink } from 'react-router-dom';

const workData = [
  {
    id: 1,
    category: 'men',
    img: 'https://i.postimg.cc/4dPnHqjW/shirt-men.jpg',
    title: 'Classic Blue Shirt',
    detailsTitle: 'Men’s Classic Blue Shirt',
    description: 'A timeless slim-fit shirt made with 100% cotton, perfect for casual and formal occasions.',
    created: '22 Apr 2025',
    technologies: 'Sizes: M, L, XL',
    role: 'Price: $45',
    link: '/product/1'
  },
  {
    id: 2,
    category: 'women',
    img: 'https://i.postimg.cc/vH7pM4RL/dress-women.jpg',
    title: 'Summer Floral Dress',
    detailsTitle: 'Women’s Summer Floral Dress',
    description: 'Lightweight and breathable floral dress, ideal for summer outings.',
    created: '15 Apr 2025',
    technologies: 'Sizes: S, M, L',
    role: 'Price: $65',
    link: '/product/2'
  },
  {
    id: 3,
    category: 'accessories',
    img: 'https://i.postimg.cc/7LPxTt9Y/bag.jpg',
    title: 'Leather Handbag',
    detailsTitle: 'Premium Leather Handbag',
    description: 'Stylish handbag crafted from genuine leather with gold-tone details.',
    created: '10 Apr 2025',
    technologies: 'One Size',
    role: 'Price: $120',
    link: '/product/3'
  },
  {
    id: 4,
    category: 'men',
    img: 'https://i.postimg.cc/sxKvy0tB/jacket.jpg',
    title: 'Denim Jacket',
    detailsTitle: 'Casual Denim Jacket',
    description: 'A classic denim jacket with a modern cut for a stylish look.',
    created: '4 Apr 2025',
    technologies: 'Sizes: M, L, XL',
    role: 'Price: $75',
    link: '/product/4'
  }
];

const Store = () => {
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
      <h2 className="section-title" data-heading="Our Collection">Latest Products</h2>

      <div className="work-filters">
        <span
          className={`work-item ${filter === 'all' ? 'active-work' : ''}`}
          onClick={() => handleFilter('all')}
          data-filter="all"
        >
          All
        </span>
        <span
          className={`work-item ${filter === 'men' ? 'active-work' : ''}`}
          onClick={() => handleFilter('men')}
          data-filter="men"
        >
          Men
        </span>
        <span
          className={`work-item ${filter === 'women' ? 'active-work' : ''}`}
          onClick={() => handleFilter('women')}
          data-filter="women"
        >
          Women
        </span>
        <span
          className={`work-item ${filter === 'accessories' ? 'active-work' : ''}`}
          onClick={() => handleFilter('accessories')}
          data-filter="accessories"
        >
          Accessories
        </span>
      </div>

      <div className="work-container container grid">
        {filteredWork.map((item) => (
          <div className={`work-card mix ${item.category}`} key={item.id}>
            <img src={item.img} alt="" className="work-img" />
            <h3 className="work-title">{item.title}</h3>
            <div className="buttons-actions">
              <NavLink to={item.link} className="button selected" onClick={() => handleShowDetails(item)}>
                View <UilArrowRight className="work-button-icon" />
              </NavLink>
              <button className="button selected">
                <UilShoppingCart className="work-button-icon" />
              </button>
            </div>

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
                <div className="portfolio-popup-subtitle">Category - <span>{portfolioDetails.category}</span></div>
                <div className="portfolio-popup-body">
                  <h3 className="details-title">{portfolioDetails.detailsTitle}</h3>
                  <p className="details-description">{portfolioDetails.description}</p>

                  <ul className="details-info">
                    <li>Added - <span>{portfolioDetails.created}</span></li>
                    <li>Sizes - <span>{portfolioDetails.technologies}</span></li>
                    <li>{portfolioDetails.role}</li>
                    <li>
                      Buy Now - <span>
                        <NavLink to={portfolioDetails.link} className="nav-logo-text">
                          {portfolioDetails.link}
                        </NavLink>
                      </span>
                    </li>
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

export default Store;
