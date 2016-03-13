import { call, put } from 'redux-saga/effects'
import { takeEvery } from 'redux-saga'
import { EMAIL_VALIDATE_REQUEST, EMAIL_VALIDATE_ERROR, EMAIL_VALIDATE_SUCCESS } from '../actions/emailValidation'
import { emailValidateApi } from '../services/api'
import { GrowlerActions } from 'flash-notification-react-redux'

const notifySuccess = () => GrowlerActions.showGrowlerSuccess('Your account is now activated, sign in and enjoy !')
const notifyError = () => GrowlerActions.showGrowlerError('Impossible to validate your account, the link must have expired')

export function * emailValidationSaga ({ payload }) {
  const { email, token } = payload
  try {
    yield call(emailValidateApi, email, token)
    yield put({ type: EMAIL_VALIDATE_SUCCESS })
    yield put(notifySuccess())
  } catch (error) {
    yield put({ type: EMAIL_VALIDATE_ERROR })
    yield put(notifyError())
  }
}

function * watchEmailValidation () {
  yield * takeEvery(EMAIL_VALIDATE_REQUEST, emailValidationSaga)
}

export default watchEmailValidation
