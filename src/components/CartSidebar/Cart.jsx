// src/components/Cart.js
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { UilShoppingCart, UilTimes } from "@iconscout/react-unicons";
import { cartCheckOut, subscribeCart, unsubscribeCart } from "../../data/workData";
import { NavLink } from "react-router-dom";
import "./Cart.css";

const Cart = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState(cartCheckOut);

  const toggleCart = () => setIsCartOpen(!isCartOpen);

  useEffect(() => {
    const updateCart = (items) => setCartItems([...items]);
    subscribeCart(updateCart);
    return () => unsubscribeCart(updateCart);
  }, []);

  const handleRemoveItem = (id) => {
    const index = cartCheckOut.findIndex((item) => item.id === id);
    if (index !== -1) {
      cartCheckOut.splice(index, 1); // remove from global cart
      setCartItems([...cartCheckOut]); // update local state
    }
  };

  const total = cartItems.reduce((sum, item) => sum + item.subtotal, 0);

  return (
    <>
      <div className="cart-toggle" id="cart-toggle" onClick={toggleCart}>
        <AnimatePresence mode="wait" initial={false}>
          {isCartOpen ? (
            <motion.div
              key="close"
              initial={{ opacity: 0, rotate: -90, scale: 0.5 }}
              animate={{ opacity: 1, rotate: 0, scale: 1 }}
              exit={{ opacity: 0, rotate: 90, scale: 0.5 }}
              transition={{ duration: 0.3 }}
            >
              <UilTimes />
            </motion.div>
          ) : (
            <motion.div
              key="cart"
              initial={{ opacity: 0, rotate: 90, scale: 0.5 }}
              animate={{ opacity: 1, rotate: 0, scale: 1 }}
              exit={{ opacity: 0, rotate: -90, scale: 0.5 }}
              transition={{ duration: 0.3 }}
              className="cart-icon-wrapper"
            >
              <UilShoppingCart />
              <span className="cart-badge">{cartItems.reduce((sum, item) => sum + item.quantity, 0)}</span>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <aside
        className={`cart-sidebar ${isCartOpen ? "show-cart-sidebar" : ""}`}
        id="cart-sidebar"
      >
        <div className="cart-content">
          {cartItems.length === 0 ? (
            <p>No items in your cart yet.</p>
          ) : (
            <>
              <ul className="cart-list">
                {cartItems.map((item) => (
                  <li key={item.id} className="cart-item">
                    <img src={item.thumbnail} alt={item.title} className="cart-img" />
                    <div className="cart-info">
                      <h4>{item.title}</h4>
                      <p>
                        {item.quantity} × ${item.price} = <b>${item.subtotal}</b>
                      </p>
                    </div>
                    <button
                      className="cart-remove-btn"
                      onClick={() => handleRemoveItem(item.id)}
                    >
                      <UilTimes />
                    </button>
                  </li>
                ))}
              </ul>
              <div className="cart-footer">
                <h3>Total: ${total}</h3>
                <NavLink to="/checkout" className="button checkout-btn">
                  Checkout
                </NavLink>
              </div>
            </>
          )}
        </div>
      </aside>
    </>
  );
};

export default Cart;
