import { call, put } from 'redux-saga/effects'
import { takeEvery } from 'redux-saga'
import { SIGNIN_REQUEST, SIGNIN_ERROR, SIGNIN_SUCCESS } from '../actions/signIn'
import { signInApi } from '../services/api'
import { GrowlerActions } from 'flash-notification-react-redux'

const notifySuccess = () => GrowlerActions.showGrowlerSuccess('You are now logged in')
const notifyError = () => GrowlerActions.showGrowlerError('Invalid username/password pair')

export function * loginSaga ({ payload }) {
  const { email, password } = payload
  try {
    const res = yield call(signInApi, email, password)
    yield put({ type: SIGNIN_SUCCESS })
    yield put(notifySuccess())
  } catch (error) {
    yield put({ type: SIGNIN_ERROR })
    yield put(notifyError())
  }
}

function * watchLogin () {
  yield * takeEvery(SIGNIN_REQUEST, loginSaga)
}

export default watchLogin
