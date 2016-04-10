import { call, put } from 'redux-saga/effects'
import { push } from 'react-router-redux'
import { takeEvery } from 'redux-saga'
import { EMAIL_VALIDATE_REQUEST, EMAIL_VALIDATE_ERROR, EMAIL_VALIDATE_SUCCESS } from '../actions/emailValidation'
import { emailValidateApi } from '../services/api'
import { NOTIFY_ERROR, NOTIFY_SUCCESS } from '../actions/notification'

export function * emailValidationSaga ({ payload }) {
  const { email, token } = payload
  try {
    yield call(emailValidateApi, email, token)
    yield put({ type: EMAIL_VALIDATE_SUCCESS })
    yield put({ type: NOTIFY_SUCCESS, payload: 'Your account is now activated, sign in and enjoy !' })
    yield put(push('/sign_in')) // redirect to sign in
  } catch (error) {
    yield put({ type: EMAIL_VALIDATE_ERROR })
    yield put({ type: NOTIFY_SUCCESS, payload: 'Impossible to validate your account, the link must have expired' })
    yield put(push('/sign_in')) // redirect to home
  }
}

function * watchEmailValidation () {
  yield * takeEvery(EMAIL_VALIDATE_REQUEST, emailValidationSaga)
}

export default watchEmailValidation
