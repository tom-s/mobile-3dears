import signin from './signin'
import signup from './signup'
import emailValidation from './emailValidation'
import { fork } from 'redux-saga/effects'

function * root () {
  yield fork(signin)
  yield fork(signup)
  yield fork(emailValidation)
}

export default root
