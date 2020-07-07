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
import React, { useState, useEffect } from "react";
import { Button, Header } from "semantic-ui-react";

import Sidebar from "./components/SideBar";
import SlackEvents from "./components/SlackEvents";


const Home = () => {
  const { authState, authService } = useOktaAuth();
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    if (!authState.isAuthenticated) {
      // When user isn't authenticated, forget any user info
      setUserInfo(null);
    } else {
      authService.getUser().then((info) => {
        setUserInfo(info);
        //TODO: send call to back end with user info
      });
    }
  }, [authState, authService]); // Update if authState changes

  const login = async () => {
    authService.login("/");
  };

  if (authState.isPending) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div>
        <Header as="h1">Home Page</Header>

        {authState.isAuthenticated && !userInfo && (
          <div>Loading user information...</div>
        )}

        {authState.isAuthenticated && userInfo && (
          <div>
            <p>
              Welcome back,
              {userInfo.name}!
            </p>
          </div>
        )}

        {!authState.isAuthenticated && (
          <div>
            <Button id="login-button" primary onClick={login}>
              Login
            </Button>
          </div>
        )}

        {authState.isAuthenticated && userInfo && (
          <div>
            <Sidebar />
            <SlackEvents />
          </div>
        )}
      </div>
    </div>
  );
};
export default Home;
