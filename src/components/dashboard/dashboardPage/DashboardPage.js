import React from "react";
import { Switch, Route } from "react-router-dom";
import {
  makeStyles,
  Drawer,
  CssBaseline,
  Toolbar,
  Divider,
} from "@material-ui/core";
// Drawer
import DashNavbar from "../dashNav/DashboardNav";
import SettingDrawer from "../dashDrawer/SettingDrawer";
import SubDrawer from "../dashDrawer/SubDrawer";
// Drawer Components
import Dashboard from "../subPanels/dashboard/Dashboard";
import Profile from "../subPanels/profile/Profile";
import DashSettings from "../subPanels/dashSettings/DashSettings";
import SubscriptionForm from "../subPanels/subscriptionForm/SubscriptionForm";
import SlackCallback from "../../SlackCallback";
import RankingForm from "../../RankingForm";
import MembersList from "../../MembersList";
import useMediaQuery from "@material-ui/core/useMediaQuery";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  // class passed to Dash-Navbar
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    height: "4.5rem",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerContainer: {
    overflow: "auto",
  },
}));

const DashPage = ({ logout, setSlackState, slackState }) => {
  const classes = useStyles();
  const matches = useMediaQuery("(min-width:600px)");

  return (
    <>
      <div className={classes.root}>
        <CssBaseline />
        {/* Built Navbar from material-ui components.
      Passed in logout from App.js */}
        <DashNavbar
          logout={logout}
          position="fixed"
          className={classes.appBar}
          style={classes.appBar}
        />
        <Drawer
          className={classes.drawer}
          variant="permanent"
          classes={{ paper: classes.drawerPaper }}
          style={matches ? {} : { display: "none", zIndex: 0 }}
        >
          <Toolbar />
          <div className={classes.drawerContainer}>
            <SettingDrawer />
            <Divider />
            <SubDrawer />
          </div>
        </Drawer>
      </div>
      <Switch>
        <Route
          exact
          path="/"
          render={(props) => (
            <Dashboard
              {...props}
              setSlackState={setSlackState}
              slackState={slackState}
            />
          )}
        />
        <Route path="/profile" render={(props) => <Profile {...props} />} />
        <Route
          path="/settings"
          render={(props) => <DashSettings {...props} />}
        />
        <Route
          path="/subscription-form"
          render={(props) => <SubscriptionForm slackState={slackState} />}
        />
        <Route
          path="/slackCallback"
          render={(props) => (
            <SlackCallback {...props} setSlackState={setSlackState} />
          )}
        />
        <Route path="/rank" slackState={slackState} component={RankingForm} />
        <Route
          path="/membersList"
          render={(props) => (
            <MembersList
              {...props}
              setSlackState={setSlackState}
              slackState={slackState}
            />
          )}
        />
      </Switch>
    </>
  );
};
export default DashPage;
