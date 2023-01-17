import React from "react";
import { Outlet } from "react-router-dom";
import "./Warehouse.css";
import TopMenu from "./Components/TopMenu/TopMenu";

function Warehouse() {
  return (
    <div className="warehouse">
      <TopMenu />
      <Outlet />
    </div>
  );
}

export default Warehouse;
