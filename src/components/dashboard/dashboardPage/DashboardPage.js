import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { makeStyles, Drawer, CssBaseline, Toolbar, Divider, } from '@material-ui/core'
// Drawer
import DashNavbar from '../dashNav/DashboardNav'
import SettingDrawer from '../dashDrawer/SettingDrawer'
import SubDrawer from '../dashDrawer/SubDrawer'
// Components
import Dashboard from '../subPanels/dashboard/Dashboard'
import Profile from '../subPanels/profile/Profile'
import DashSettings from '../subPanels/dashSettings/DashSettings'
import SubscriptionForm from '../subPanels/subscriptionForm/SubscriptionForm'

const drawerWidth = 240

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex'
  },
  // class passed to Dash-Navbar
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    height:'4.5rem'
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0
  },
  drawerPaper: {
    width: drawerWidth
  },
  drawerContainer: {
    overflow: 'auto'
  }
}))

const DashPage = ({ logout }) => {
  const classes = useStyles()

  return (
    <>
      <div className={classes.root}>
        <CssBaseline />
        {/* Built Navbar from material-ui components.
      Passed in logout from App.js */}
        <DashNavbar
          logout={logout}
          position='fixed'
          className={classes.appBar}
          style={classes.appBar}
        />
        <Drawer
          className={classes.drawer}
          variant='permanent'
          classes={{ paper: classes.drawerPaper }}>
          <Toolbar />
          <div className={classes.drawerContainer}>
            <SettingDrawer />
            <Divider />
            <SubDrawer />
          </div>
        </Drawer>
      </div>
      <Switch>
        <Route exact path='/' render={props => <Dashboard {...props} />} />
        <Route path='/profile' render={props => <Profile {...props} />} />
        <Route path='/settings' render={props => <DashSettings {...props} />} />
        <Route path='/subscription-form' render={props => <SubscriptionForm />} />
      </Switch>
    </>
  )
}
export default DashPage