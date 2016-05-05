import { call, put } from 'redux-saga/effects'
import { push } from 'react-router-redux'
import { takeEvery } from 'redux-saga'
import { fork } from 'redux-saga/effects'
import { URL_ERROR, URL_AUTH_ERROR, URL_SAVE_REFERER } from '../actions/url'
import { NOTIFY_ERROR } from '../actions/notification'

export function * urlErrorSaga ({ payload }) {
  const { referer } = payload
  yield put({ type: URL_SAVE_REFERER, payload: referer })
  yield put(push('/404'))
  yield put({ type: NOTIFY_ERROR, payload: 'This page does not exist, try to access another page' })
}

export function * urlAuthErrorSaga ({ payload }) {
  const { referer } = payload
  yield put({ type: URL_SAVE_REFERER, payload: referer })
  yield put(push('/sign_in')) // redirect to sign in
  yield put({ type: NOTIFY_ERROR, payload: 'You need to log in to access this page' })
}

function * watchUrlError () {
  yield * takeEvery(URL_ERROR, urlErrorSaga)
}

function * watchUrlAuthError () {
  yield * takeEvery(URL_AUTH_ERROR, urlAuthErrorSaga)
}

function * watchUrl () {
  yield fork(watchUrlError)
  yield fork(watchUrlAuthError)
}

export default watchUrl
