import authReducer from '../../../src/reducers/auth'
import { SIGNIN_SUCCESS } from '../../../src/actions/signIn'
import { SIGNOUT_SUCCESS } from '../../../src/actions/signOut'
import { expect } from 'chai'
import deepFreeze from 'deep-freeze'

describe('auth reducer', () => {
  it('default state', () => {
    const state = authReducer(undefined, { type: 'fake' })
    expect(state).to.eql({
      loggedIn: false,
      token: null
    })
  })

  it('auth signIn', () => {
    const previousState = { loggedIn: false, token: null }
    deepFreeze(previousState)
    const state = authReducer(previousState, { type: SIGNIN_SUCCESS, payload: 'thisismytoken' })
    expect(state).to.eql({
      loggedIn: true,
      token: 'thisismytoken'
    })
  })

  it('auth signOut', () => {
    const previousState = { loggedIn: true, token: 'thisismytoken' }
    deepFreeze(previousState)
    const state = authReducer(previousState, { type: SIGNOUT_SUCCESS })
    expect(state).to.eql({
      loggedIn: false,
      token: null
    })
  })
})
