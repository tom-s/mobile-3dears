import { call, put } from 'redux-saga/effects'
import { push } from 'react-router-redux'
import { takeEvery } from 'redux-saga'
import { fork } from 'redux-saga/effects'
import { URL_ERROR, URL_AUTH_ERROR, URL_SAVE_REFERER } from '../actions/url'
import { NOTIFY_ERROR, NOTIFY_SUCCESS } from '../actions/notification'

export function * urlErrorSaga ({ payload }) {
  const { referer } = payload
  yield put({ type: URL_SAVE_REFERER, payload: referer })
  yield put(push('/sign_in')) // redirect to sign in
}

export function * urlAuthErrorSaga ({ payload }) {
  const { referer } = payload
  yield put({ type: URL_SAVE_REFERER, payload: referer })
  yield put(push('/sign_in')) // redirect to sign in
}

function * watchUrlError () {
  yield * takeEvery(URL_ERROR, urlErrorSaga)
}

function * watchUrlAuthError () {
  yield * takeEvery(URL_ERROR, urlAuthErrorSaga)
}

function * watchUrl () {
  yield fork(watchUrlError)
  yield fork(watchUrlAuthError)
}

export default watchUrl
