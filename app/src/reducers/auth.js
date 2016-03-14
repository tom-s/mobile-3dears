import { SIGNIN_SUCCESS } from '../actions/signIn'
import { SIGNOUT_SUCCESS } from '../actions/signOut'

const auth = (state = { loggedin: false, token: null }, action) => {
  switch (action.type) {
    case SIGNIN_SUCCESS:
      return { loggedin: true, token: action.payload }
    case SIGNOUT_SUCCESS:
      return { loggedin: false, token: null }
    default:
      return state
  }
}

export default auth
