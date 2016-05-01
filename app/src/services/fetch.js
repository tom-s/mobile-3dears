import es6Promise from 'es6-promise'
import fetch from 'isomorphic-fetch'
import { contains } from 'ramda'
import { API_URL } from '../../../config/conf'
import { getAuthToken } from './auth'

es6Promise.polyfill() // activate polyfill

const errorStatus = [400, 401, 403, 404, 409, 500, 503]

const _serializeParams = (params) => {
  return Object.keys(params).map((key) => {
    return key + '=' + encodeURIComponent(params[key])
  }).join('&')
}

const buildHeaders = () => {
  const header = {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  }
  // Try to retrieve token
  const token = getAuthToken()
  if (token) {
    header['Authorization'] = 'Bearer ' + token
  }
  return header
}

const Api = {
  get (url, params = {}) {
    const strParams = _serializeParams(params)
    return fetch(API_URL + url + '?' + strParams, {
      method: 'get',
      headers: buildHeaders()
    }).then((response) => {
      if (contains(response.status, errorStatus)) {
        throw {
          status: response.status,
          message: response.body
        }
      } else {
        return response.json()
      }
    })
  },

  post (url, params = {}) {
    const strParams = JSON.stringify(params)
    return fetch(API_URL + url, {
      method: 'post',
      headers: buildHeaders(),
      body: strParams
    }).then((response) => {
      if (contains(response.status, errorStatus)) {
        throw {
          status: response.status,
          message: response.body
        }
      } else {
        return response.json()
      }
    })
  }
}

export default Api
