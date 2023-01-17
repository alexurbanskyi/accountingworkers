import React from "react";
import { GiOfficeChair } from "react-icons/gi";
import { AiOutlineLaptop } from "react-icons/ai";
import { GrDesktop } from "react-icons/gr";
import { GiDesk } from "react-icons/gi";
import { Link } from "react-router-dom";
import "./TopMenu.css";

function TopMenu() {
  return (
    <div className="topnav">
      <ul className="topnav_list">
        <li className="topnav_link">
          <Link to="/warehouse">
            <div className="link_icon">
              <GiOfficeChair />
            </div>
            <p className="link_title">Chair</p>
          </Link>
        </li>
        <li className="topnav_link">
          <Link to="/warehouse/laptop">
            <div className="link_icon">
              <AiOutlineLaptop />
            </div>
            <p className="link_title">Laptop</p>
          </Link>
        </li>
        <li className="topnav_link">
          <Link to="/warehouse/desktop">
            <div className="link_icon">
              <GiDesk />
            </div>
            <p className="link_title">Desktop</p>
          </Link>
        </li>
        <li className="topnav_link">
          <Link to="/warehouse/monitor">
            <div className="link_icon">
              <GrDesktop />
            </div>
            <p className="link_title">Monitor</p>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default TopMenu;
