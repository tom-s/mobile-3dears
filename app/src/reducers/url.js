import { URL_SAVE_REFERER } from '../actions/url'

const url = (state = { referer: null }, { type, payload }) => {
  switch (type) {
    case URL_SAVE_REFERER:
      return { referer: payload }
    default:
      return state
  }
}

export default url
