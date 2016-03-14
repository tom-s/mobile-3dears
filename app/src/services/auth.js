import Cookies from 'js-cookie'

const SECURITY_TOKEN = 'mixingEars.token'

export const setAuthToken = (token) => {
  Cookies.set(SECURITY_TOKEN, token)
}

export const removeAuthToken = () => {
  Cookies.remove(SECURITY_TOKEN)
}

export const getAuthToken = () => {
  return Cookies.get(SECURITY_TOKEN)
}
