import React from "react";
import { Outlet } from "react-router-dom";
import "./Warehouse.css";
import TopMenu from "./Components/TopMenu/TopMenu";

function Warehouse() {

  return (
    <div className="warehouse">
      <TopMenu />
      <div>
        <button>add new element</button>
      </div>
      <Outlet />
    
    </div>
  );
}

export default Warehouse;
