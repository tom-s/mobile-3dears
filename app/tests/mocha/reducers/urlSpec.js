import urlReducer from '../../../src/reducers/url'
import { URL_SAVE_REFERER } from '../../../src/actions/url'
import { expect } from 'chai'
import deepFreeze from 'deep-freeze'

describe('url reducer', () => {
  it('default state', () => {
    const state = urlReducer(undefined, { type: 'fake' })
    expect(state).to.eql({
      referer: null
    })
  })

  it('referer save', () => {
    const previousState = { referer: null }
    deepFreeze(previousState)
    const state = urlReducer(previousState, { type: URL_SAVE_REFERER, payload: { referer: '/wrongurl' } })
    expect(state).to.eql({
      referer: '/wrongurl'
    })
  })
})
