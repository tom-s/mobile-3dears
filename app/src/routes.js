import React from 'react'
import { Route, DefaultRoute } from 'react-router'
import App from './containers/App'
import HomePage from './containers/AboutPage'
import AboutPage from './containers/AboutPage'
import NoMatch from './containers/NoMatch'

export default (
  <Route path="" component={App}>
    <Route path="/" component={HomePage} />
    <Route path="/about" component={AboutPage} />
  </Route>
)