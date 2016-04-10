import { call, put } from 'redux-saga/effects'
import { push } from 'react-router-redux'
import { takeEvery } from 'redux-saga'
import { initApi } from '../services/api'
import { INIT_REQUEST, INIT_SUCCESS, INIT_ERROR } from '../actions/init'
import * as GrowlerActions from '../actions/growler'

const notifyError = () => GrowlerActions.showGrowlerError('Impossible to initialize your app, try to reload the page')

export function * initSaga ({ payload }) {
  console.log("init saga !")
  try {
    const data = yield call(initApi)
    console.log("data", data)
    yield put({ type: INIT_SUCCESS, payload: data })
  } catch (error) {
    console.log("caught error ", error)
    yield put({ type: INIT_ERROR })
    yield put(notifyError())
  }
}

function * watchInit () {
  yield * takeEvery(INIT_REQUEST, initSaga)
}

export default watchInit
