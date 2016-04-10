import { put } from 'redux-saga/effects'
import { push } from 'react-router-redux'
import { takeEvery } from 'redux-saga'
import { SIGNOUT_REQUEST, SIGNOUT_SUCCESS } from '../actions/signOut'
import { removeAuthToken } from '../services/auth'
import { NOTIFY_SUCCESS } from '../actions/notification'

export function * logoutSaga ({ payload }) {
  removeAuthToken()
  yield put({ type: SIGNOUT_SUCCESS })
  yield put({ type: NOTIFY_SUCCESS, payload: 'You are now logged out. Come back soon !' })
  yield put(push('/'))
}

function * watchLogout () {
  yield * takeEvery(SIGNOUT_REQUEST, logoutSaga)
}

export default watchLogout
