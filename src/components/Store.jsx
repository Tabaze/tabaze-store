import React, { useState } from 'react';
import { UilArrowRight, UilShoppingCart } from '@iconscout/react-unicons';
import { NavLink } from 'react-router-dom';
import { workData, cartCheckOut } from '../data/workData';

const Store = () => {
  const [filter, setFilter] = useState('all');

  const handleFilter = (category) => {
    setFilter(category);
  };


  const handleAddToCart = (product) => {
    // check if product already exists
    const cartItem = cartCheckOut.find((item) => item.id === product.id);

    if (cartItem) {
      // update quantity + subtotal
      cartItem.quantity += 1;
      cartItem.subtotal = cartItem.price * cartItem.quantity;
    } else {
      // add new product
      cartCheckOut.push({
        ...product,
        quantity: 1,
        subtotal: product.price,
      });
    }

    console.log("Cart:", cartCheckOut); // just to debug
  };

  const filteredWork = filter === 'all'
    ? workData
    : workData.filter(item => item.category === filter);

  return (
    <section className="work section" id="work">
      <h2 className="section-title" data-heading="Our Collection">Latest Products</h2>

      <div className="work-filters">
        <div
          className={`work-item ${filter === 'all' ? 'active-work' : ''}`}
          onClick={() => handleFilter('all')}
          data-filter="all"
        >
          All
        </div>
        <div
          className={`work-item ${filter === 'men' ? 'active-work' : ''}`}
          onClick={() => handleFilter('men')}
          data-filter="men"
        >
          Men
        </div>
        <div
          className={`work-item ${filter === 'women' ? 'active-work' : ''}`}
          onClick={() => handleFilter('women')}
          data-filter="women"
        >
          Women
        </div>
        <div
          className={`work-item ${filter === 'accessories' ? 'active-work' : ''}`}
          onClick={() => handleFilter('accessories')}
          data-filter="accessories"
        >
          Accessories
        </div>
      </div>

      <div className="work-container container grid">
        {filteredWork.map((item) => (
          <div className={`work-card mix ${item.category}`} key={item.id}>
            <img src={item.thumbnail} alt="" className="work-img" />
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
