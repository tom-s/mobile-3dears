import axios from 'axios'

const API_URL = 'http://localhost:3000'

const Api = {
  get (url, params) {
    return axios.get(API_URL + url, params)
  },
  post (url, params) {
    return axios.post(API_URL + url, params)
  },
  all (queries) {
    return axios.all(queries)
  }
}

export default Api

