import React from "react";
import { Route } from "react-router-dom";
import { useOktaAuth } from "@okta/okta-react";
import { SecureRoute, LoginCallback } from "@okta/okta-react";

import LandingPage from "./components/landingPage/page/LandingPage";

import NavbarApp from "./NavbarApp";
import Sidebar from "./components/SideBar";
import Profile from "./Profile";
import EventCard from "./components/EventCard";

import "./App.css";

function App() {
  const { authState, authService } = useOktaAuth();

  const login = async () => authService.login("/");
  const logout = async () => authService.logout("/");

  return (
    <>
      {authState.isAuthenticated ? (
        <>
          <NavbarApp />
          <h4 style={{ margin: "5rem 0 0 ", fontSize: "3rem" }}>dashboard</h4>
          <div style={{ display: "flex", justifyContent: "space-evenly" }}>
            <Sidebar />
            <EventCard />
          </div>
        </>
      ) : (
        <div>
          <LandingPage login={login} logout={logout} authState={authState} />
        </div>
      )}
      <SecureRoute path="/profile" component={Profile} />
      <Route path="/implicit/callback" component={LoginCallback} />
    </>
  );
}

export default App;
