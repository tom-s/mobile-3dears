import { apply, curry } from 'ramda'
import { Promise } from 'es6-promise'
import { SIGNIN_SUCCESS } from '../actions/signIn'
import { INIT_REQUEST } from '../actions/init'
import { URL_AUTH_ERROR, URL_ERROR } from '../actions/url'
import { TRAINING_TYPES } from '../actions/training'
import { getAuthToken } from './auth'

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms))

const loadAuth = store => () => {
  const token = getAuthToken()
  console.log("token ?", token)
  if (token) {
    store.dispatch({ type: SIGNIN_SUCCESS, payload: token })
    store.dispatch({ type: INIT_REQUEST, payload: null })
  }
  return delay(500)
}

const loginRequired = store => ( nextState, replace, cb) => {
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

const checkTraining = store => ( nextState, replace, cb) => {
  const { params: { type, exerciseId }, location: { pathname } } = nextState
  // Redirect to dashboard if training type is not valid
  if (!TRAINING_TYPES[type]) {
    store.dispatch({
      type: URL_ERROR,
      payload: {
        referer: pathname
      }
    })
  }
  cb()
}

const initRouter = (store) => {
  return {
    loadAuth: loadAuth(store),
    loginRequired: loginRequired(store),
    checkTraining: checkTraining(store)
  }
}

export default initRouter