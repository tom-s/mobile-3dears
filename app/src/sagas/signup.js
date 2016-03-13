import { call, put } from 'redux-saga/effects'
import { takeEvery } from 'redux-saga'
import { SIGNUP_REQUEST, SIGNUP_SUCCESS, SIGNUP_ERROR } from '../actions/signUp'
import { signUpApi } from '../services/api'
import { GrowlerActions } from 'flash-notification-react-redux'

const notifySuccess = () => GrowlerActions.showGrowlerSuccess('Your account has been created. Please check your emails and validate your account')
const notifyError = () => GrowlerActions.showGrowlerError('Your account could not be created. Are you sure you used a valid email ? ')

export function * signupSaga ({ payload }) {
  const { email, password } = payload
  try {
    yield call(signUpApi, email, password)
    yield put({ type: SIGNUP_SUCCESS })
    yield put(notifySuccess())
  } catch (error) {
    yield put({ type: SIGNUP_ERROR })
    yield put(notifyError())
  }
}

function * watchSignup () {
  yield * takeEvery(SIGNUP_REQUEST, signupSaga)
}

export default watchSignup
