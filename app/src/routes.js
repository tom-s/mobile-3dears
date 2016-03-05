import React from 'react'
import { Route, DefaultRoute } from 'react-router'
import App from './containers/App'

// Pages
import AboutPage from './containers/pages/About'
import HomePage from './containers/pages/Home'
import PricingPage from './containers/pages/Pricing'
import SignInPage from './containers/pages/SignIn'
import SignUpPage from './containers/pages/SignUp'

export default (
  <Route path="" component={App}>
    <Route path="/" component={HomePage} />
    <Route path="/about" component={AboutPage} />
    <Route path="/pricing" component={PricingPage} />
    <Route path="/sign_in" component={SignInPage} />
    <Route path="/sign_up" component={SignUpPage} />
  </Route>
)