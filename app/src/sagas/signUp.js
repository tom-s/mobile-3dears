import { call, put } from 'redux-saga/effects'
import { push } from 'react-router-redux'
import { takeEvery } from 'redux-saga'
import { SIGNUP_REQUEST, SIGNUP_SUCCESS, SIGNUP_ERROR } from '../actions/signUp'
import { signUpApi } from '../services/api'
import { NOTIFY_ERROR, NOTIFY_SUCCESS } from '../actions/notification'

export function * signupSaga ({ payload }) {
  const { email, password } = payload
  try {
    yield call(signUpApi, email, password)
    yield put({ type: SIGNUP_SUCCESS })
    yield put({ type: NOTIFY_SUCCESS, payload: 'Your account has been created. Please check your emails and validate your account' })
    yield put(push('/'))
  } catch ({ status }) {
    yield put({ type: SIGNUP_ERROR })
    if(status === 409) {
      yield put({ type: NOTIFY_ERROR, payload: 'An account for this email has already been created. Try signing in !' })
    } else {
      yield put({ type: NOTIFY_ERROR, payload: 'Your account could not be created. Are you sure you used a valid email ?' })
    }
    if (status === 409) {
      yield put(push('/sign_in')) // redirect to sign in
    }
  }
}

function * watchSignup () {
  yield * takeEvery(SIGNUP_REQUEST, signupSaga)
}

export default watchSignup
