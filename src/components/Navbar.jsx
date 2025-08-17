import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { UilBars, UilTimes, UilUser, UilShoppingBag, UilHeart } from '@iconscout/react-unicons';
import logo from '../assets/images/tabaze-store.jpeg';

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  const closeSidebar = () => setIsSidebarOpen(false);

  return (
    <>
      {/* Mobile Toggle (unchanged) */}
      <div className="nav-toggle" id="nav-toggle" onClick={toggleSidebar}>
        <UilBars />
      </div>


      <div className="nav-menu" style={{ marginLeft: 'auto' }}>
        <ul className="nav-list min-nav-list" style={{ display: 'flex', gap: '1rem' ,flexdirection: "row"}}>
          <li className="nav-item">
            <NavLink to="/cart" className="nav-link" >
              <UilShoppingBag />
              <span style={{
                position: 'absolute',
                top: '-8px',
                right: '-8px',
                background: '#ff6b6b',
                color: 'white',
                borderRadius: '50%',
                width: '18px',
                height: '18px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '0.7rem'
              }}>0</span>
            </NavLink>
          </li>
        </ul>
      </div>

      {/* Sidebar (modified for clothing store) */}
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