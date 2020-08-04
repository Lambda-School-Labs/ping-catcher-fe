import React, { useState, useMemo } from "react";
import { Route, Switch } from "react-router-dom";
import { useOktaAuth } from "@okta/okta-react";
import { LoginCallback } from "@okta/okta-react";
import LandingPage from "./components/landingPage/page/LandingPage";
// ResponsiveDrawer component moved to DashboardPage
import DashPage from "./components/dashboard/dashboardPage/DashboardPage";
import RankingForm from "./Old_Components/RankingForm.js";
import {
  LinearProgress,
  ThemeProvider,
  Switch as MuiSwitch,
  Paper,
  createMuiTheme,
} from "@material-ui/core";

function prefersDarkMode() {
  if (!window.matchMedia) return;
  const darkMode = window.matchMedia("(prefers-color-scheme: dark)");
  console.log("user prefers dark-mode", darkMode.matches);
  return darkMode.matches;
}

function App() {
  // This is the auth logic in the top most part of the App.
  // Pass this down to both LandingPage and DashboardPage components
  const { authState, authService } = useOktaAuth();
  // Review the Okta path on these
  const login = async () => authService.login("/");
  const logout = async () => authService.logout("/");

  // variables to manipulate the '/' root of App to display correct page depanding on auth state.
  // Show the spinner if waiting to get auth back
  const showSpinner = authState.isPending;
  // Show Landing page if not authorized - no token
  const showLandingPage = !authState.isPending && !authState.isAuthenticated;
  // Show the Dashboard page component
  const showDashboard = authState.isAuthenticated;

  // Setting up Dark Mode to be used at the App.js level.
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
      // change to DashboardPage component and pass authState props
      return <DashPage logout={logout} />;
    }
    if (!showSpinner && !showDashboard && showLandingPage) {
      // LandingPage component with authState for logging in.
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
          <h3 style={{ position: "fixed", top: 70, left: 1200 }}>Toggle</h3>
          <Switch>
            <Route path="/implicit/callback" component={LoginCallback} />
            <Route path="/rank" component={RankingForm} />
          </Switch>
        </Paper>
      </ThemeProvider>
    </div>
  );
  //   <>
  //     {/* // call the function to show the propper page. */}
  //     {conditionalRender()}
  //     <Switch>
  //       <Route path='/implicit/callback' component={LoginCallback} />
  //     </Switch>
  //   </>
  // )
}
export default App;
