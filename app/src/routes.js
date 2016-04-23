import React from 'react'
import { Route } from 'react-router'
import App from './containers/App'
import { getAuthToken } from './services/auth'
import { SIGNIN_SUCCESS } from './actions/signIn'
import { INIT_REQUEST } from './actions/init'
import { Promise } from 'es6-promise'

// Pages
import AboutPage from './containers/pages/About'
import DashboardPage from './containers/pages/Dashboard'
import EmailValidationPage from './containers/pages/EmailValidation'
import HomePage from './containers/pages/Home'
import PricingPage from './containers/pages/Pricing'
import SignInPage from './containers/pages/SignIn'
import SignUpPage from './containers/pages/SignUp'
import TrainingPage from './containers/pages/Training'
import UrlErrorPage from './containers/pages/UrlError'
import { URL_AUTH_ERROR } from './actions/url'

export default(store) => {

  const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms))

  const loadAuth = () => {
    const token = getAuthToken()
    if (token) {
      store.dispatch({ type: SIGNIN_SUCCESS, payload: token })
      store.dispatch({ type: INIT_REQUEST, payload: null })
    }
    return delay(500)
  }

  const loginRequired = (nextState, replace, cb) => {
    const checkAuth = () => {
      const { auth:  { loggedIn } } = store.getState()
      if (!loggedIn) {
        store.dispatch({ type: URL_AUTH_ERROR })
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
      <Route path="/dashboard" onEnter={loginRequired} component={DashboardPage} />
      <Route path="/training/:type/:exerciseId" onEnter={loginRequired} component={TrainingPage} />
      <Route path="*" component={UrlErrorPage}/>
    </Route>
  )
}
