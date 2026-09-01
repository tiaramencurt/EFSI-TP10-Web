import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <NavLink 
        to="/" 
        className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
      >
        Inicio
      </NavLink>
      <NavLink 
        to="/favorites" 
        className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
      >
        Favoritos
      </NavLink>
    </nav>
  );
};

export default Navbar;