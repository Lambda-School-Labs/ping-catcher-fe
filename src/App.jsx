import React from 'react'
import { Route } from 'react-router-dom'
import { useOktaAuth } from '@okta/okta-react'
import { SecureRoute, LoginCallback } from '@okta/okta-react'
// import config from './config'

import Navbar from './components/landingPage/navbar/Navbar'
import Hero from './components/landingPage/hero/Hero'
import SlackCard from './components/landingPage/infoCard/SlackCard'
import NotifyCard from './components/landingPage/infoCard/NotifyCard'
import OrganizeCard from './components/landingPage/infoCard/OrganizeCard'
import Footer from './components/landingPage/footer/Footer'

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
          <header>
            <Navbar login={login} logout={logout} authState={authState} />
          </header>
          <Hero login={login} logout={logout} authState={authState} />
          <section className='info'>
            <SlackCard />
            <NotifyCard />
            <OrganizeCard />
          </section>
          <Footer />
        </div>
      )}
      <SecureRoute path='/profile' component={Profile} />
      <Route path='/implicit/callback' component={LoginCallback} />
    </>
  )
}

export default App
