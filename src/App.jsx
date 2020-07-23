import React from "react";
import { Route } from "react-router-dom";
import { useOktaAuth } from "@okta/okta-react";
import { SecureRoute, LoginCallback } from "@okta/okta-react";
import LandingPage from "./components/landingPage/page/LandingPage";
import ResponsiveDrawer from "./AppDrawerNew";
import Profile from "./Profile";
import { LinearProgress } from "@material-ui/core";
import "./App.css";

function App() {
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
    <>
      {conditionalRender()}
      <Route path="/implicit/callback" component={LoginCallback} />
      <SecureRoute path="/profile" component={Profile} />
    </>
  );
}
export default App;
