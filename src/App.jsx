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

import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Security, SecureRoute, LoginCallback } from "@okta/okta-react";
import { Container } from "semantic-ui-react";
import config from "./config";

const Home = lazy(() => import("./Home"));
const Messages = lazy(() => import("./Messages"));
const Navbar = lazy(() => import("./Navbar"));
const Profile = lazy(() => import("./Profile"));

const PingCard = lazy(() => import("./components/PingCard.js"));

const App = () => (
  <Router>
    <Suspense fallback={<div>Loading...</div>}>
      <Security {...config.oidc}>
        <Navbar />
        <Suspense fallback={<div>Loading...</div>}>
          <Container text style={{ marginTop: "7em" }}>
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/implicit/callback" component={LoginCallback} />
              <Route path="/pingCard" component={PingCard} />
              <SecureRoute path="/messages" component={Messages} />
              <SecureRoute path="/profile" component={Profile} />
            </Switch>
          </Container>
        </Suspense>
      </Security>
    </Suspense>
  </Router>
);
export default App;
