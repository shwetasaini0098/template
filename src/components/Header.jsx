import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <header className="header">
      <div className="logo">MyCreativeWorld</div>

      <nav className="nav-links">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About Me</NavLink>
        <NavLink to="/resume">Resume</NavLink>

        <div className="dropdown-click">
          <span
            className="dropbtn"
            onClick={() => setShowDropdown(!showDropdown)}
          >
            Talents ▾
          </span>
          {showDropdown && (
            <div className="dropdown-content">
              <NavLink to="/talents/web-designer">Web Designer</NavLink>
              <NavLink to="/talents/canva-designer">Canva Designer</NavLink>
              <NavLink to="/talents/mehndi-designer">Mehndi Designer</NavLink>
              <NavLink to="/talents/fashion-designer">Fashion Designer</NavLink>
              <NavLink to="/talents/beauty-parlour">Beauty Parlour</NavLink>
            </div>
          )}
        </div>

        <NavLink to="/family">Family</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </nav>
    </header>
  );
};

export default Header;
