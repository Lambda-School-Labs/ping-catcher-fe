import React from "react";
// import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";

import "./nav.css";

const Navbar = () => {
  return (
    <nav className="nav">
      <img src="/images/Ping_Catcher.png" className="logo" alt="application" />
      <ul className="nav-links">
        <li>About</li>
        <li>Contact Us</li>
      </ul>
    </nav>
  );
};

export default Navbar;
