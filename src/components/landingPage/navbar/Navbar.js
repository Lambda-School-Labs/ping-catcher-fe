import React from "react";
// import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";

import "./nav.css";

const Navbar = ({ login, logout, authState }) => {
  return (
    <nav className='nav'>
      <img src='/images/Ping_Catcher.png' className='logo' alt='application' />
      <ul className='nav-links'>
        {authState.isAuthenticated && (
          <Button className='nav-link' onClick={logout}>
            Logout
          </Button>
        )}
        {!authState.isPending && !authState.isAuthenticated && (
          <Button className='nav-link' onClick={login} to={""}>
            Login
          </Button>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
