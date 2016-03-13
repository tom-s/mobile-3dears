import es6Promise from 'es6-promise'
import fetch from 'isomorphic-fetch'

const API_URL = 'http://localhost:3000'

es6Promise.polyfill() // activate polyfill

const _serializeParams = (params) => {
  return Object.keys(params).map((key) => {
    return key + '=' + encodeURIComponent(params[key])
  }).join('&')
}

const Api = {
  get (url, params) {
    const strParams = _serializeParams(params)
    return fetch(API_URL + url, {
      method: 'get',
      body: strParams
    })
  },
  post (url, params) {
    const strParams = _serializeParams(params)
    return fetch(API_URL + url, {
      method: 'post',
      body: strParams
    })
  }
}

export default Api

