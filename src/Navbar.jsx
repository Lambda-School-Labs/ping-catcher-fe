/*
 * Copyright (c) 2018, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *
 * See the License for the specific language governing permissions and limitations under the License.
 */

import { useOktaAuth } from "@okta/okta-react";
import React from "react";
import SubscribeButton from "./components/SubscribeButton";
// Commenting out the import Semantic-UI.
// import { Container, Icon, Image, Menu, Input } from "semantic-ui-react";

// Importing Material-UI for the NavBar.
import { fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
// Adding in the default style to the NavBar. Will change the theme at another time.
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
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
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));
const Navbar = () => {
  const { authState, authService } = useOktaAuth();
  const login = async () => authService.login("/");
  const logout = async () => authService.logout("/");

  const classes = useStyles();

  return (
    // Commenting out the Semantic-UI NavBar.
//     <div>
//       <Menu fixed="top">
//         <Container>
//           <Menu.Item>
//             <Image size="tiny" src="/images/ping7.png" as="a" href="/" />
//           </Menu.Item>
//           {authState.isAuthenticated && (
//             <Menu.Item id="messages-button" as="a" href="/messages">
//               <Icon name="mail outline" />
//               Messages
//             </Menu.Item>
//           )}
//           {authState.isAuthenticated && (
//             <Menu.Item id="profile-button" as="a" href="/profile">
//               Profile
//             </Menu.Item>
//           )}
//           {authState.isAuthenticated && (
//             <Menu.Item id="logout-button" as="a" onClick={logout}>
//               Logout
//             </Menu.Item>
//           )}
//           {!authState.isPending && !authState.isAuthenticated && (
//             <Menu.Item as="a" onClick={login}>
//               Login
//             </Menu.Item>
//           )}
//           {authState.isAuthenticated && (
//             <Menu.Item id="Search-Button">
//               <Input icon="search" placeholder="Search mail..." />
//             </Menu.Item>
//           )}
//           <SubscribeButton />
//         </Container>
//       </Menu>
//     </div>
    <div>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Ping Catcher
          </Typography>

          {/* Adding in a Search Bar to the NavBar */}
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase placeholder="Search…" classes={{root: classes.inputRoot, input: classes.inputInput,}}inputProps={{'aria-label':'search'}}
            />
          </div>
           {!authState.isPending && !authState.isAuthenticated && (<Button color="inherit" as="a" onClick={login}>Login</Button>)}
        </Toolbar>
      </AppBar>
    </div>
  );
};
export default Navbar;
