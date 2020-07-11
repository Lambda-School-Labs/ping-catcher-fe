import React from 'react'
import { Route } from 'react-router-dom'
import { useOktaAuth } from '@okta/okta-react'
import { SecureRoute, LoginCallback } from '@okta/okta-react'
// import config from './config'

import LandingPage from './components/landingPage/page/LandingPage'

import NavbarApp from './NavbarApp'
import PingCard from './components/PingCard'
import Sidebar from './components/SideBar'
import SlackEvents from './components/SlackEvents'
import Profile from './Profile'

import './App.css'

function App () {
  const { authState, authService } = useOktaAuth()

  const login = async () => authService.login('/')
  const logout = async () => authService.logout('/')

  // const history = useHistory()
  return (
    <>
      {authState.isAuthenticated ? (
        <>
          <NavbarApp />
          <h4>dashboard</h4>
          <PingCard />
          <Sidebar />
          <SlackEvents />
        </>
      ) : (
        <div>
          <LandingPage login={login} logout={logout} authState={authState} />
        </div>
      )}
      <SecureRoute path='/profile' component={Profile} />
      <Route path='/implicit/callback' component={LoginCallback} />
    </>
  )
}

export default App
