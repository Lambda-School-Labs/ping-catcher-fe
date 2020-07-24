import React from 'react';
import {makeStyles, useTheme, AppBar, Toolbar, Divider} from "@material-ui/core";
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import {Menu} from "@material-ui/icons";
import TopDivider from './DrawerList';
import NavBarContent from './NavContent';
// import DrawerFunction from './DrawerFunction';
const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
      appBar: {
        [theme.breakpoints.up('sm')]: {
          width: `calc(100% - ${drawerWidth}px)`,
          marginLeft: drawerWidth,
        },
      },
        // necessary for content to be below app bar
        toolbar: theme.mixins.toolbar,
        drawerPaper: {
          width: drawerWidth,
        },
      menuButton: {
        marginRight: theme.spacing(2),
        [theme.breakpoints.up('sm')]: {
          display: 'none',
        },
      },
      drawer: {
        [theme.breakpoints.up('sm')]: {
          width: drawerWidth,
          flexShrink: 0,
        },
      },
    }));
function NavBar(props) {
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const handleDrawerToggle = () => { setMobileOpen(!mobileOpen) };
    const drawer = (
      <div>
        <div className={classes.toolbar} />
        <Divider />
        <TopDivider />
      </div>
    );
    return (
      <div className={classes.root}>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
        <Menu
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          className={classes.menuButton}
          />
          <NavBarContent />
        </Toolbar>
        {/* <DrawerFunction/> */}
        <nav className={classes.drawer} aria-label="mailbox folders">
        <Hidden smUp implementation="css">
          <Drawer
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={ {paper: classes.drawerPaper}}
            ModalProps={{ keepMounted: true}}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{ paper: classes.drawerPaper}}
            variant="permanent" open>
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
      </AppBar>
      </div>
    )};
    export default NavBar;