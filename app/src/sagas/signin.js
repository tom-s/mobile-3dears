import { call, put } from 'redux-saga/effects'
import { push } from 'react-router-redux'
import { takeEvery } from 'redux-saga'
import { SIGNIN_REQUEST, SIGNIN_ERROR, SIGNIN_SUCCESS } from '../actions/signIn'
import { signInApi } from '../services/api'
import { setAuthToken } from '../services/auth'
import { GrowlerActions } from 'flash-notification-react-redux'

const notifySuccess = () => GrowlerActions.showGrowlerSuccess('You are now logged in')
const notifyError = () => GrowlerActions.showGrowlerError('Invalid username/password pair')

export function * loginSaga ({ payload }) {
  const { email, password } = payload
  try {
    const { token } = yield call(signInApi, email, password)
    setAuthToken(token)
    yield put({ type: SIGNIN_SUCCESS, payload: token })
    yield put(notifySuccess())
    yield put(push('/'))
  } catch (error) {
    yield put({ type: SIGNIN_ERROR })
    yield put(notifyError())
  }
}

function * watchLogin () {
  yield * takeEvery(SIGNIN_REQUEST, loginSaga)
}

export default watchLogin
