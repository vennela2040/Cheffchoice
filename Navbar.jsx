import React from 'react';
import { Link } from 'react-router-dom'; 
import './styles/Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="logo">
          <h1>Cheff's Choice</h1>
        </div>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/sign">Register/Login</Link></li> {/* Added Register link */}
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;

