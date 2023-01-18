import React from "react";
import { GiOfficeChair } from "react-icons/gi";
import { AiOutlineLaptop } from "react-icons/ai";
import { FiMonitor } from "react-icons/fi";
import { GiDesk } from "react-icons/gi";
import { Link, NavLink  } from "react-router-dom";
import "./TopMenu.css";

function TopMenu() {
  return (
    <div className="topnav">
      <ul className="topnav_list">
        <li className="topnav_link">
          <NavLink to="/warehouse">
            <div className="link_icon">
              <GiOfficeChair />
            </div>
            <p className="link_title">Chair</p>
          </NavLink>
        </li>
        <li className="topnav_link">
          <NavLink to="/warehouse/laptop">
            <div className="link_icon">
              <AiOutlineLaptop />
            </div>
            <p className="link_title">Laptop</p>
          </NavLink>
        </li>
        <li className="topnav_link">
          <NavLink to="/warehouse/desktop">
            <div className="link_icon">
              <GiDesk />
            </div>
            <p className="link_title">Desktop</p>
          </NavLink>
        </li>
        <li className="topnav_link">
          <NavLink to="/warehouse/monitor">
            <div className="link_icon">
              <FiMonitor />
            </div>
            <p className="link_title">Monitor</p>
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default TopMenu;
