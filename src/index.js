import React from "react";
import ReactDOM from "react-dom";
import "semantic-ui-css/semantic.min.css";
import "./polyfills";
import App from "./App";
import "./index.css";
import registerServiceWorker from "./registerServiceWorker";

import dotenv from "dotenv";
dotenv.config();

/* global document */
/* eslint-disable react/jsx-filename-extension */
ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
