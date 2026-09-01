import React from 'react';
import Navbar from '../Navbar';
import './Header.css';

const Header: React.FC = () => {
  return (
    <header className="header">
      <h1 className="header-title">Explorador de Contenido</h1>
      <Navbar />
    </header>
  );
};

export default Header;