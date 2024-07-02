import React from 'react';
import './SidebarStyle.css';

const NavbarLateral = () => {
  return (
    <div className="navbar-lateral">
      <div className="logo">
        <img src="logo.png" alt="Logo" />
      </div>
      <ul className="menu">
        <li><a href="#">Vista 1</a></li>
        <li><a href="#">Vista 2</a></li>
        <li><a href="#">Vista 3</a></li>
        <li><a href="#">Vista 4</a></li>
        <li><a href="#">Vista 5</a></li>
        <li><a href="#">Vista 6</a></li>
        <li><a href="#">Vista 7</a></li>
        <li>
          <button className="btn-logout">Cerrar sesión</button>
        </li>
      </ul>
    </div>
  );
};

export default NavbarLateral;