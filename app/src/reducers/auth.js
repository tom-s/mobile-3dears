import { SIGNIN_SUCCESS } from '../actions/signIn'
import { SIGNOUT_SUCCESS } from '../actions/signOut'

const auth = (state = { loggedIn: false, token: null }, { type, payload }) => {
  switch (type) {
    case SIGNIN_SUCCESS:
      return { loggedIn: true, token: payload }
    case SIGNOUT_SUCCESS:
      return { loggedIn: false, token: null }
    default:
      return state
  }
}

export default auth
