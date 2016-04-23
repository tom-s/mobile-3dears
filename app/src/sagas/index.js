import { fork } from 'redux-saga/effects'
import emailValidation from './emailValidation'
import init from './init'
import signIn from './signIn'
import signUp from './signUp'
import signOut from './signOut'
import notification from './notification'
import url from './url'

function * root () {
  yield fork(emailValidation)
  yield fork(init)
  yield fork(signIn)
  yield fork(signUp)
  yield fork(signOut)
  yield fork(notification)
  yield fork(url)
}

export default root
