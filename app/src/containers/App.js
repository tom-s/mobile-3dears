import { connect } from 'react-redux'
import { getAuthToken } from '../services/auth'
import { SIGNIN_SUCCESS } from '../actions/signIn'
import App from '../components/App'

const mapDispatchToProps = (dispatch) => {
  return {
    initAuth: () => {
      const token = getAuthToken()
      if (token) {
        dispatch({ type: SIGNIN_SUCCESS, payload: token })
      }
    }
  }
}

const mapStateToProps = (state, ownProps) => {
  return {}
}

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App)

export default AppContainer
