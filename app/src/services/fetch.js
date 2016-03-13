import es6Promise from 'es6-promise'
import fetch from 'isomorphic-fetch'
import R from 'ramda'
import { API_URL } from 'config'

es6Promise.polyfill() // activate polyfill

const errorStatus = [400, 401, 403, 409, 500, 503]

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
    }).then((response) => {
      if (R.contains(response.status, errorStatus)) {
        throw {
          status: response.status,
          message: response.body
        }
      } else {
        return response.body
      }
    })
  },

  post (url, params) {
    const strParams = JSON.stringify(params)
    return fetch(API_URL + url, {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: strParams
    }).then((response) => {
      if (R.contains(response.status, errorStatus)) {
        throw {
          status: response.status,
          message: response.body
        }
      } else {
        return response.body
      }
    })
  }
}

export default Api
