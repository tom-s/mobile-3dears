import React from 'react'
import { Route } from 'react-router'
import App from './containers/App'
import { getAuthToken } from './services/auth'
import { SIGNIN_SUCCESS } from './actions/signIn'
import { Promise } from 'es6-promise'

// Pages
import AboutPage from './containers/pages/About'
import HomePage from './containers/pages/Home'
import PricingPage from './containers/pages/Pricing'
import SignInPage from './containers/pages/SignIn'
import SignUpPage from './containers/pages/SignUp'
import EmailValidationPage from './containers/pages/EmailValidation'

export default(store) => {

  const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms))

  const loadAuth = () => {
    const token = getAuthToken()
    if (token) {
      store.dispatch({ type: SIGNIN_SUCCESS, payload: token })
    }
    return delay(500)
  }

  const loginRequired = (nexState, replace, cb) => {
    console.log("nextState", nexState)
    const checkAuth = () => {
      const { auth:  { loggedIn } } = store.getState()
      if (!loggedIn) {
        replace('/')
      }
      cb()
    }

    const { auth: { loggedIn } } = store.getState()
    if (!loggedIn) {
      loadAuth().then(checkAuth)
    } else {
      checkAuth()
    }
  }

  return (
    <Route path="" onEnter={loadAuth} component={App}>
      <Route path="/" component={HomePage} />
      <Route path="/about" component={AboutPage} />
      <Route path="/pricing" component={PricingPage} />
      <Route path="/sign_in" component={SignInPage} />
      <Route path="/sign_up" component={SignUpPage} />
      <Route path="/validation" component={EmailValidationPage} />
      <Route path="/dashboard" onEnter={loginRequired} component={PricingPage} />
    </Route>
  )
}
