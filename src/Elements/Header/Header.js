import React from "react";
import { NavLink } from "react-router-dom";
import './Header.css'

function Header() {
  return (
    <div className="header">
      <nav className="header_nav">
        <ul className="nav_list">
          <li className="nav_link">
            <NavLink to='/'>Analytics</NavLink>
          </li>
          <li className="nav_link">
            <NavLink to='/workers'>Workers</NavLink>
          </li>
          <li className="nav_link">
            <NavLink to='/warehouse'>Warehouse</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
