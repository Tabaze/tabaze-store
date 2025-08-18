// src/components/Cart.js
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { UilShoppingCart, UilTimes } from "@iconscout/react-unicons";
import "./Cart.css"
const Cart = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleCart = () => setIsCartOpen(!isCartOpen);

  return (
    <>
      {/* Cart Toggle Button (always visible) */}
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
            >
              <UilShoppingCart />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Cart Sidebar */}
      <aside
        className={`cart-sidebar ${isCartOpen ? "show-cart-sidebar" : ""}`}
        id="cart-sidebar"
      >
       
        <div className="cart-content">
          <p>No items in your cart yet.</p>
          {/* Later you can map cart items here */}
        </div>
      </aside>
    </>
  );
};

export default Cart;
