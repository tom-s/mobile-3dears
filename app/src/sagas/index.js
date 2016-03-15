import signIn from './signIn'
import signUp from './signUp'
import signOut from './signOut'
import emailValidation from './emailValidation'
import { fork } from 'redux-saga/effects'

function * root () {
  yield fork(signIn)
  yield fork(signUp)
  yield fork(signOut)
  yield fork(emailValidation)
}

export default root
