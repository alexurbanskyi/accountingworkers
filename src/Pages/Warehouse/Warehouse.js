import React from "react";
import { Link, Outlet } from "react-router-dom";
import { GiOfficeChair } from "react-icons/gi";
import { AiOutlineLaptop } from 'react-icons/ai'
import {GrDesktop} from 'react-icons/gr'
import {GiDesk} from 'react-icons/gi'
import "./Warehouse.css";

const mokWarehouse = [
  {
    barCode: "CH2022001",
    type: "chair",
    master: "Alex Urbanskyi",
  },
  {
    barCode: "LT2022001",
    type: "laptop",
    master: "Alex Urbanskyi",
    configuration: [
      {
        model: "Lenovo",
        cpu: "Pentium i5",
        diskType: "SSD",
        memorySize: "16Gb",
      },
    ],
  },
  {
    barCode: "DT2022001",
    type: "desktop",
    master: "Alex Urbanskyi",
    configuration: [
      {
        cpu: "Pentium i5",
        diskType: "SSD",
        memorySize: "16Gb",
        videoCard: "NVIDIA 4Gb",
      },
    ],
  },
  {
    barCode: "MO2022001",
    type: "monitor",
    master: "Alex Urbanskyi",
    configuration: [
      {
        model: "LG",
        screenSize: "22.5",
      },
    ],
  },
];

function Warehouse() {
  return (
    <div className="warehouse">
      <div className="topnav">
        <ul className="topnav_list">
          <li className="topnav_link">
            <Link to="/warehouse/chair">
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
      <Outlet />
    </div>
  );
}

export default Warehouse;
