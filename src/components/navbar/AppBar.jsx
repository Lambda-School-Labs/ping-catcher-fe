import React from 'react';
import { useOktaAuth } from "@okta/okta-react";
import SearchIcon from "@material-ui/icons/Search";
import {makeStyles, useTheme, fade, AppBar, Toolbar, InputBase, Button, Divider} from "@material-ui/core";
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import {Menu} from "@material-ui/icons";
import TopDivider from './Drawer';
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
    moveRight: {
        display: 'flex',
        marginLeft: 'auto',
        },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': { backgroundColor: fade(theme.palette.common.white, 0.25)},
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
          marginLeft: theme.spacing(1),
          width: 'auto',
        },
    },
    searchIcon: {
      padding: theme.spacing(0, 2),
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    inputRoot: {
      color: 'inherit',
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: '12ch',
        '&:focus': { width: '20ch'},
      },
    },
    buttonNav: {
      marginLeft: '2rem',
    }
    }));
function NavBar(props) {
    const classes = useStyles();
    const logout = async () => authService.logout("/");
    const { authState, authService } = useOktaAuth();
    const theme = useTheme();
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
      };
    const drawer = (
      <div>
        <div className={classes.toolbar} />
        <Divider />
        <TopDivider />
      </div>
    );
    return (
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
        <Menu
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          className={classes.menuButton}
          />
          <img src='/images/Ping_Catcher.png' className='logo' alt='application' />
          <div className={classes.moveRight}>
            <div className={classes.shiftRight}>
            <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{root: classes.inputRoot,input: classes.inputInput}}
              inputProps={{ 'aria-label': 'search' }}/>
            </div>
            </div>
            {!authState.isPending && authState.isAuthenticated && 
            (<Button color="inherit" as="a" onClick={logout} classes={{root: classes.buttonNav}}>Logout</Button>)}
            </div>
        </Toolbar>
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
    )};
    export default NavBar;