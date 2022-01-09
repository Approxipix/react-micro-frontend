import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className="Header">
      <h1 className="Header__title">Micro Frontend</h1>
      <nav className="Header__nav">
        <NavLink to="/" className="Header__nav-link">
          Home
        </NavLink>
        <NavLink to="/blogs" className="Header__nav-link">
          Blogs
        </NavLink>
        <NavLink to="/about" className="Header__nav-link">
          About
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
