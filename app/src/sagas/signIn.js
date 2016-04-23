import { call, put, select } from 'redux-saga/effects'
import { push } from 'react-router-redux'
import { takeEvery } from 'redux-saga'
import { SIGNIN_REQUEST, SIGNIN_ERROR, SIGNIN_SUCCESS } from '../actions/signIn'
import { signInApi } from '../services/api'
import { setAuthToken } from '../services/auth'
import { NOTIFY_ERROR, NOTIFY_SUCCESS } from '../actions/notification'
import { getReferer } from '../selectors/url'

export function * loginSaga ({ payload }) {
  const { email, password } = payload
  try {
    const { token } = yield call(signInApi, email, password)
    setAuthToken(token)
    yield put({ type: SIGNIN_SUCCESS, payload: token })
    yield put({ type: NOTIFY_SUCCESS, payload: 'You are now logged in' })
    const state = yield select()
    const referer = getReferer(state)
    yield put(push(referer || '/'))
  } catch (error) {
    yield put({ type: SIGNIN_ERROR })
    yield put({ type: NOTIFY_ERROR, payload: 'Invalid username/password pair' })
  }
}

function * watchLogin () {
  yield * takeEvery(SIGNIN_REQUEST, loginSaga)
}

export default watchLogin
