// Drawer at top for profile, add subscription, dark mode

import React from "react";
import { withRouter, useHistory } from "react-router-dom";
import { List, ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import {
  Person as PersonIcon,
  Dashboard as DashboardIcon,
  Settings as SettingsIcon,
  Add as AddIcon,
} from "@material-ui/icons";
import useMediaQuery from "@material-ui/core/useMediaQuery";

const SettingDrawer = (props) => {
  const history = useHistory();
  const settingsList = [
    {
      name: "Profile",
      icon: <PersonIcon />,
      onClick: () => history.push("/profile"),
    },
    {
      name: "Dashboard",
      icon: <DashboardIcon />,
      onClick: () => history.push("/"),
    },
    {
      name: "Settings",
      icon: <SettingsIcon />,
      onClick: () => history.push("/settings"),
    },
    {
      name: "Subscription",
      icon: <AddIcon />,
      onClick: () => history.push("/form"),
    },
    {
      name: "Members List",
      icon: <PersonIcon />,
      onClick: () => history.push("/membersList"),
    },
  ];

  const matches = useMediaQuery("(min-width:600px)");
  return (
    <List style={matches ? {} : { display: "none" }}>
      {settingsList.map((item, index) => {
        const { name, icon, onClick } = item;
        return (
          <ListItem button key={index} onClick={onClick}>
            <ListItemIcon>
              {icon && <ListItemIcon>{icon}</ListItemIcon>}
            </ListItemIcon>
            <ListItemText primary={name} />
          </ListItem>
        );
      })}
    </List>
  );
};

export default withRouter(SettingDrawer);
