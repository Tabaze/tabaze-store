import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from "framer-motion";
import { UilBars, UilTimes } from '@iconscout/react-unicons';
import logo from '../assets/images/tabaze-store.jpeg';

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  const closeSidebar = () => setIsSidebarOpen(false);

  return (
    <>
      <div className="nav-toggle" id="nav-toggle" onClick={toggleSidebar}>
        <AnimatePresence mode="wait" initial={false}>
          {isSidebarOpen ? (
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
              key="bars"
              initial={{ opacity: 0, rotate: 90, scale: 0.5 }}
              animate={{ opacity: 1, rotate: 0, scale: 1 }}
              exit={{ opacity: 0, rotate: -90, scale: 0.5 }}
              transition={{ duration: 0.3 }}
            >
              <UilBars />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <aside className={`sidebar ${isSidebarOpen ? 'show-sidebar' : ''}`} id="sidebar">
        <nav className="nav">
          <div className="nav-logo">
            <NavLink to="/" className="nav-logo-text" onClick={closeSidebar}>
              <img src={logo} alt="Tabaze Store" />
            </NavLink>
            <div className="nav-close" id="nav-close" onClick={toggleSidebar}>
              <UilTimes />
            </div>
          </div>

          <div className="nav-menu">
            <div className="menu">
              <ul className="nav-list">
                <li className="nav-item">
                  <NavLink
                    to="/"
                    className={({ isActive }) =>
                      isActive ? "nav-link active-link" : "nav-link"
                    }
                    onClick={closeSidebar}
                    end
                  >
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    to="/shop"
                    className={({ isActive }) =>
                      isActive ? "nav-link active-link" : "nav-link"
                    }
                    onClick={closeSidebar}
                  >
                    Shop All
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    to="/new"
                    className={({ isActive }) =>
                      isActive ? "nav-link active-link" : "nav-link"
                    }
                    onClick={closeSidebar}
                  >
                    New Arrivals
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    to="/sale"
                    className={({ isActive }) =>
                      isActive ? "nav-link active-link sale-link" : "nav-link sale-link"
                    }
                    onClick={closeSidebar}
                  >
                    Sale
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    to="/about"
                    className={({ isActive }) =>
                      isActive ? "nav-link active-link" : "nav-link"
                    }
                    onClick={closeSidebar}
                  >
                    Our Story
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    to="/contact"
                    className={({ isActive }) =>
                      isActive ? "nav-link active-link" : "nav-link"
                    }
                    onClick={closeSidebar}
                  >
                    Contact
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </aside>
    </>
  );
};

export default Navbar;