
import React, { useState } from 'react';
import '../estilos/menu.css'; // Importa el archivo de estilos CSS

const Navbar = () => {

  const [isMobile, setIsMobile] =useState(false);

  const handleMenuClick = () => {
    setIsMobile(!isMobile);
  };

  return (
    <nav className="navbar">
      <h1 className="logo">Logo</h1>
      <div className={`menu ${isMobile ? 'mobile' : ''}`}>
        <a href="#home">Inicio</a>
        <a href="#about">Acerca de</a>
        <a href="#services">Servicios</a>
        <a href="#contact">Contacto</a>
      </div>
      <button className="menu-icon" onClick={handleMenuClick}>
        <i className={isMobile ? 'fas fa-times' : 'fas fa-bars'}></i>
      </button>
    </nav>
  );
};

export default Navbar;

