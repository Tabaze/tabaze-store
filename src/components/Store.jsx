import React, { useState } from 'react';
import { UilArrowRight, UilShoppingCart } from '@iconscout/react-unicons';
import { NavLink } from 'react-router-dom';
import { workData, cartCheckOut, categories } from '../data/workData';

const Store = () => {
  const [filter, setFilter] = useState('all');

  const handleFilter = (category) => {
    setFilter(category);
  };

  const handleAddToCart = (product) => {
    const cartItem = cartCheckOut.find((item) => item.id === product.id);

    if (cartItem) {
      cartItem.quantity += 1;
      cartItem.subtotal = cartItem.price * cartItem.quantity;
    } else {
      cartCheckOut.push({
        ...product,
        quantity: 1,
        subtotal: product.price,
      });
    }

    console.log("Cart:", cartCheckOut); 
  };

  const filteredWork =
    filter === 'all' ? workData : workData.filter((item) => item.category === filter);

  return (
    <section className="work section" id="work">
      <h2 className="section-title" data-heading="Our Collection">
        Latest Products
      </h2>

      {/* ✅ Dynamically render categories */}
      <div className="work-filters">
        <div
          className={`work-item ${filter === 'all' ? 'active-work' : ''}`}
          onClick={() => handleFilter('all')}
          data-filter="all"
        >
          All
        </div>
        {categories.map((cat) => (
          <div
            key={cat.id}
            className={`work-item ${filter === cat.title.toLowerCase() ? 'active-work' : ''}`}
            onClick={() => handleFilter(cat.title.toLowerCase())}
            data-filter={cat.title.toLowerCase()}
          >
            {cat.title}
          </div>
        ))}
      </div>

      <div className="work-container container grid">
        {filteredWork.map((item) => (
          <div className={`work-card mix ${item.category}`} key={item.id}>
            <img src={item.thumbnail} alt={item.title} className="work-img" />
            <h3 className="work-title">{item.title}</h3>
            <div className="buttons-actions">
              <NavLink to={item.link} className="button selected">
                View <UilArrowRight className="work-button-icon" />
              </NavLink>
              <button
                className="button selected"
                onClick={() => handleAddToCart(item)}
              >
                <UilShoppingCart className="work-button-icon" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Store;
