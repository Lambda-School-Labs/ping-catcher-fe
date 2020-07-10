import React from 'react'
import { Link } from 'react-router-dom'

import './nav.css'

const Navbar = ({ login, logout, authState }) => {
  return (
    <nav className='nav'>
      <img src='/images/Ping_Catcher.png' className='logo' alt='application' />
      <ul className='nav-links'>
        {authState.isAuthenticated && (
          <Link className='nav-link' onClick={logout}>
            Logout
          </Link>
        )}
        {!authState.isPending && !authState.isAuthenticated && (
          <Link className='nav-link' onClick={login}>
            Login
          </Link>
        )}
      </ul>
    </nav>
  )
}

export default Navbar
