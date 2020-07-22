import React from 'react';
import clsx from 'clsx';
import { useOktaAuth } from "@okta/okta-react";
import SearchIcon from "@material-ui/icons/Search";
import EventCard from "./components/EventCard";
import {CssBaseline, fade, makeStyles, AppBar, Toolbar, IconButton, Button, InputBase} from "@material-ui/core";
import {MenuIcon} from "@material-ui/icons/Menu";
import SideDrawer from "./components/Drawer";
const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
   root: {
     display: 'flex',
   },
  title: {
    flexGrow: 1,
    display: "none",
    [theme.breakpoints.up("sm")]: { display: "block" },
  },
  appBar: {
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": { backgroundColor: fade(theme.palette.common.white, 0.25) },
    marginLeft: 0,
    marginRight: "2rem",
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

function ResponsiveDrawer(props) {
  const classes = useStyles();
  // const theme = useTheme();
  const { authState, authService } = useOktaAuth();
  const logout = async () => authService.logout("/");
  // const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const handleDrawerToggle = () => {setMobileOpen(!mobileOpen); };
  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
        <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <SideDrawer/>
          
        </Toolbar>
      </AppBar>
      <main className={clsx(classes.content)}>
        <div className={classes.drawerHeader} />
            <EventCard/>
      </main>
    </div>
  );
}
// export default ResponsiveDrawer;