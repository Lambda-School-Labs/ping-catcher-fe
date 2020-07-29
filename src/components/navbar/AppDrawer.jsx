import React from "react";
import { Route, Switch } from "react-router-dom";
import { SecureRoute } from "@okta/okta-react";
import clsx from "clsx";
import EventCard from "../EventCard";
import AppBarNav from "./nav-components/AppBar";
import { CssBaseline, makeStyles } from "@material-ui/core";

import RankingForm from "../RankingForm.js";
import Profile from "../../Profile";

const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
  root: { display: "flex" },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: { width: drawerWidth },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    marginLeft: drawerWidth,
  },
}));

function ResponsiveDrawer(props) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBarNav />

      <main className={clsx(classes.content)}>
        <div className={classes.toolbar} />
        <Switch>
          <Route exact path="/" component={EventCard} />
          <Route path="/rank" component={RankingForm} />
          <SecureRoute path="/profile" component={Profile} />
        </Switch>
      </main>
    </div>
  );
}

export default ResponsiveDrawer;
