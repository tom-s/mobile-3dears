import signin from './signin'
import signup from './signup'
import signout from './signout'
import emailValidation from './emailValidation'
import { fork } from 'redux-saga/effects'

function * root () {
  yield fork(signin)
  yield fork(signup)
  yield fork(signout)
  yield fork(emailValidation)
}

export default root
