import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <nav>
        <ul>
          <li>
            <NavLink>Analytics</NavLink>
          </li>
          <li>
            <NavLink>Workers</NavLink>
          </li>
          <li>
            <NavLink>Warehouse</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
