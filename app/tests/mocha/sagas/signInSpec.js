import 'babel-polyfill'

import { call, put } from 'redux-saga/effects'
import { push } from 'react-router-redux'
import { SIGNIN_REQUEST, SIGNIN_ERROR, SIGNIN_SUCCESS } from '../../../src/actions/signIn'
import { signInApi } from '../../../src/services/api'
import { setAuthToken } from '../../../src/services/auth'
import { loginSaga } from '../../../src/sagas/signIn'

import { expect } from 'chai'

describe('signIn saga', () => {
  it('success call', () => {
    const { email, password } = { email: 'thom.schell@gmail.com', 'password': 'tests'}
    const gen = loginSaga({ payload: { email, password } })
    const { value: callApi } = gen.next()
    expect(callApi).to.eql(call(signInApi, email, password))
    /*
    const gen = loadPage({ payload: { bookId: 1, page: 10 } })
    const { value: callApi } = gen.next()
    expect(callApi).to.eql(call(loadLessonByPageApi, 1, 10))
    const { value: changeRoute } = gen.next({ id: 1234 })
    expect(changeRoute).to.eql(put(push(`/viewr/1234`)))
    const { value: putSuccess } = gen.next()
    expect(putSuccess).to.eql(put({ type: VIEWER_PAGE_LOADED }))*/
  })

  it('fail call', () => {
    /*
    const gen = loadPage({ payload: { bookId: 1, page: 10 } })
    const { value: callApi } = gen.next()
    expect(callApi).to.eql(call(loadLessonByPageApi, 1, 10))
    const { value: putSuccess } = gen.throw()
    expect(putSuccess).to.eql(put({ type: VIEWER_PAGE_LOADED }))*/
  })
})