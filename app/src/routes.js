import React from 'react'
import { Route } from 'react-router'
import App from './containers/App'
import AboutPage from './containers/AboutPage'
import NoMatch from './containers/NoMatch'

export default (
  <Route path="/" component={App}>
    <Route path="about" component={AboutPage} />
    <Route path="*" component={NoMatch} />
  </Route>
)