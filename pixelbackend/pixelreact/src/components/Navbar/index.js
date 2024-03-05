// components/Navbar/index.js

import React, { useState } from "react";
import logo from "../../assets/transparentlogo.png";
import { NavLink } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  const [menuActive, setMenuActive] = useState(false);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  return (
    <>
     
     <nav className="navbar">
     <img src={logo} alt="pixelsecrets" className="logo" />
        <div className="bars" onClick={toggleMenu}>
          ☰
        </div>
       
        <div className={`nav-menu ${menuActive ? "active" : ""}`}>
          <NavLink to="/encode" className="nav-link">
            Encode
          </NavLink>
          <NavLink to="/decode" className="nav-link">
            Decode
          </NavLink>
          <NavLink to="/about" className="nav-link">
            About
          </NavLink>
        </div>
      </nav>
   
    </>
  );
};

export default Navbar;
