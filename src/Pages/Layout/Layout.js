import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../../Elements/Header/Header";
import './Layout.css'

function Layout() {
  return (
    <div className="layout">
      <Header />
      <div className="main">
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;
