// Drawer at top for profile, add subscription, dark mode

import React from 'react'
import { withRouter } from 'react-router-dom'
import { List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core'
import PersonIcon from '@material-ui/icons/Person'
import DashboardIcon from '@material-ui/icons/Dashboard'
import SettingsIcon from '@material-ui/icons/Settings'
import AddIcon from '@material-ui/icons/Add'

const SettingDrawer = props => {
  const { history } = props
  const settingsList = [
    {
      name: 'Profile',
      icon: <PersonIcon />,
      onClick: () => history.push('/profile')
    },
    {
      name: 'Dashboard',
      icon: <DashboardIcon />,
      onClick: () => history.push('/')
    },
    {
      name: 'Settings',
      icon: <SettingsIcon />,
      onClick: () => history.push('/settings')
    },
    {
      name: 'Subscription',
      icon: <AddIcon />,
      onClick: () => history.push('/subscription-form')
    }
  ]
  return (
    <List>
      {settingsList.map((item, index) => {
        const { name, icon, onClick } = item
        return (
          <ListItem button key={index} onClick={onClick}>
            <ListItemIcon>
              {icon && <ListItemIcon>{icon}</ListItemIcon>}
            </ListItemIcon>
            <ListItemText primary={name} />
          </ListItem>
        )
      })}
    </List>
  )
}

export default withRouter(SettingDrawer)
