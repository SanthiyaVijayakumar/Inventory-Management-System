import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"; 

function Navbar() {
  return (
    <nav className="navbar">
      <h2 className="navbar-title">Inventory Management</h2>
      <div className="navbar-links">
        <Link to="/dashboard" className="nav-link">Dashboard</Link>
        <Link to="/products" className="nav-link">Products</Link>
        <Link to="/locations" className="nav-link">Locations</Link>
        <Link to="/movements" className="nav-link">Movements</Link>
        <Link to="/report" className="nav-link">Report</Link>
      </div>
    </nav>
  );
}

export default Navbar;
