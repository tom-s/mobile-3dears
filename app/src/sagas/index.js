import signin from './signin'
import signup from './signup'
import { fork } from 'redux-saga/effects'

function * root () {
  yield fork(signin)
  yield fork(signup)
}

export default root
