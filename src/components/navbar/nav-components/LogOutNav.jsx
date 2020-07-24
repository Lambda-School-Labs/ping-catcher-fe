import React from 'react';
import { useOktaAuth } from "@okta/okta-react";
import {makeStyles, Button} from "@material-ui/core";

    const useStyles = makeStyles((theme) => ({
        root: {
            display: 'flex',
          },
        buttonNav: {
          marginLeft: '2rem',
        }
      }));
      function LogOutNav() {
        const classes = useStyles();
        const logout = async () => authService.logout("/");
        const { authState, authService } = useOktaAuth();
        return (
            <>
                    {!authState.isPending && authState.isAuthenticated && 
                    (<Button color="inherit" as="a" onClick={logout} classes={{root: classes.buttonNav}}>Logout</Button>)}
            </>
        
    )};
    export default LogOutNav;