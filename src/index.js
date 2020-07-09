import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { Security } from '@okta/okta-react'
import config from './config'
import './polyfills'
import App from './App'
import 'semantic-ui-css/semantic.min.css'
import './index.css'

import dotenv from 'dotenv'
dotenv.config()

/* global document */
/* eslint-disable react/jsx-filename-extension */
ReactDOM.render(
  <Security {...config.oidc}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Security>,
  document.getElementById('root')
)
