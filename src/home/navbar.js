// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css'; // Create this CSS file for styles

const Navbar = () => {
  return (
    <nav className="navbar1">
      <div className="navbar-left1">
        <h1>Namma Veedu</h1>
      </div>
      <ul className="navbar-links">
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/services">Services</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
