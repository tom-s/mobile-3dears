import React from 'react'
import { Route } from 'react-router'
import App from './containers/App'
import { getAuthToken } from './services/auth'
import { SIGNIN_SUCCESS } from './actions/signIn'

// Pages
import AboutPage from './containers/pages/About'
import HomePage from './containers/pages/Home'
import PricingPage from './containers/pages/Pricing'
import SignInPage from './containers/pages/SignIn'
import SignUpPage from './containers/pages/SignUp'
import EmailValidationPage from './containers/pages/EmailValidation'

const requireLogin = (nextState, replace, cb) => {

  /*
  const checkAuth = () => {
    const { auth: { user }} = store.getState();
    if (!user) {
      // oops, not logged in, so can't be here!
      replace('/');
    }
    cb();
  }

  if (!isAuthLoaded(store.getState())) {
      store.dispatch(loadAuth()).then(checkAuth)
  } else {
    checkAuth();
  }*/
}


/*
const onEnterTest = () => {
  console.log("on enter sub !")
}*/

export default(store) => {
  const loadAuth = (nextState, replace, cb) => {
    const token = getAuthToken()
    if (token) {
      store.dispatch({ type: SIGNIN_SUCCESS, payload: token })
    }
  }

  return (
    <Route path="" component={App}>
      <Route path="/" component={HomePage} />
      <Route path="/about" component={AboutPage} />
      <Route path="/pricing" component={PricingPage} />
      <Route path="/sign_in" component={SignInPage} />
      <Route path="/sign_up" component={SignUpPage} />
      <Route path="/validation" component={EmailValidationPage} />
      <Route path="/dashboard" component={EmailValidationPage} />
    </Route>
  )
}