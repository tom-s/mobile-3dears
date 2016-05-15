import { fork } from 'redux-saga/effects'
import exercise from './exercise'
import init from './init'
import url from './url'

function * root () {
  yield fork(exercise)
  yield fork(init)
  yield fork(url)
}

export default root
