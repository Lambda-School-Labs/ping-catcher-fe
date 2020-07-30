import React, { useState, useMemo } from "react";
import { Route, Switch } from "react-router-dom";
import { useOktaAuth } from "@okta/okta-react";
import { LoginCallback } from "@okta/okta-react";
import LandingPage from "./components/landingPage/page/LandingPage";
import ResponsiveDrawer from "./components/navbar/AppDrawer";
import {
  LinearProgress,
  ThemeProvider,
  Switch as MuiSwitch,
  Paper,
  createMuiTheme,
} from "@material-ui/core";
import "./App.css";

function prefersDarkMode() {
  if (!window.matchMedia) return;
  const darkMode = window.matchMedia("(prefers-color-scheme: dark)");
  console.log("user prefers dark-mode", darkMode.matches);
  return darkMode.matches;
}

function App() {
  const [darkMode, setDarkMode] = useState(prefersDarkMode());

  const theme = useMemo(
    () =>
      createMuiTheme({
        palette: {
          type: darkMode ? "dark" : "light",
        },
      }),
    [darkMode]
  );

  // const theme = createMuiTheme({
  //   palette: {
  //     type: darkMode ? "dark" : "light",
  //   },
  // });

  const { authState, authService } = useOktaAuth();
  const login = async () => authService.login("/");
  const logout = async () => authService.logout("/");
  const showLandingPage = !authState.isPending && !authState.isAuthenticated;
  const showSpinner = authState.isPending;
  const showDashboard = !authState.isPending && authState.isAuthenticated;
  const conditionalRender = () => {
    if (showSpinner) {
      // TODO: replace/modify/theme this progress indicator.
      return (
        <>
          ping-catcher
          <h1>
            <LinearProgress />
          </h1>
        </>
      );
    }
    if (showDashboard) {
      return <ResponsiveDrawer />;
    }
    if (!showSpinner && !showDashboard && showLandingPage) {
      return (
        <LandingPage login={login} logout={logout} authState={authState} />
      );
    }
    return <h1>ERROR : conditional render encountered unknown condition.</h1>;
  };
  return (
    <div style={{ width: "100%" }}>
      <ThemeProvider theme={theme}>
        <Paper>
          {conditionalRender()}

          <MuiSwitch
            color="primary"
            label="Toggle"
            size="small"
            style={{
              position: "fixed",
              zIndex: 99999,
              top: 70,
              left: 1200,
            }}
            checked={darkMode}
            onChange={() => setDarkMode(!darkMode)}
          />
          <h3
            style={{
              position: "fixed",
              top: 70,
              left: 1200,
            }}
          >
            Toggle
          </h3>

          <Switch>
            <Route path="/implicit/callback" component={LoginCallback} />
          </Switch>
        </Paper>
      </ThemeProvider>
    </div>
  );
}
export default App;
