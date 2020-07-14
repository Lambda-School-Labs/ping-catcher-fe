import React from 'react'

import './hero.css'

const Hero = ({ login, logout, authState }) => {
  return (
    <section data-testid='heroSection' className='hero'>
      <div className='cta'>
        <div className='cta-wrapper'>
          <h1 className='cta-title'>Ping Catcher</h1>
          <p data-testid='topInfo' className='cta-info-top'>
            Time to gain <span className='underline'>control</span> over your
            notifications. Create your own channels to group notifications into
            your favorite online chat apps.
          </p>
          <p className='cta-info text-left'>
            Organize, color code, even snooze a message and get back to it when
            you have a moment. Improve your overall sanity and increase
            productivity with Ping Catcher.
          </p>
          {authState.isAuthenticated && (
            <button className='cta-btn' onClick={logout}>
              Logout
            </button>
          )}
          {!authState.isPending && !authState.isAuthenticated && (
            <button className='cta-btn' onClick={login}>
              Login
            </button>
          )}
        </div>
      </div>
    </section>
  )
}

export default Hero
