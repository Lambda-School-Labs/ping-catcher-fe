import React, { Fragment } from 'react'
import Navbar from '../NavbarApp'
import PingCard from './PingCard'
import Sidebar from './SideBar'
import SlackEvents from './SlackEvents'

import Profile from '../Profile'

// import Sidebar from "./SideBar.js";

const Dashboard = ({ secureRoute }) => {
  return (
    <Fragment>
      <Navbar />
      <h4>dashboard</h4>
      <PingCard />
      <Sidebar />
      <SlackEvents />
      <secureRoute path='/Dashboard/profile' component={Profile} />
    </Fragment>
  )
}

export default Dashboard
