import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./App.css";

const Home = lazy(() => import("./components/Home"));
const Navbar = lazy(() => import("./components/Navbar"));

function App() {
  return (
    <div>
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
          </Switch>
        </Suspense>
      </Router>
    </div>
  );
}

export default App;
