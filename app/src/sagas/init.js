import { call, put } from 'redux-saga/effects'
import { push } from 'react-router-redux'
import { takeEvery } from 'redux-saga'
import { INIT_REQUEST, INIT_SUCCESS, INIT_ERROR } from 'actions/init'
import { NOTIFY_ERROR } from 'actions/notification'

export function * initSaga ({ payload }) {
  try {
   // yield put({ type: INIT_SUCCESS, payload: data })
  } catch (error) {
    yield put({ type: INIT_ERROR })
    yield put({ type: NOTIFY_ERROR, payload: 'Impossible to initialize your app, try to reload the page' })
  }
}

function * watchInit () {
  yield * takeEvery(INIT_REQUEST, initSaga)
}

export default watchInit
