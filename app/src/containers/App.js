import { connect } from 'react-redux'
import { SIGNOUT_REQUEST } from '../actions/signOut'
import App from '../components/App'

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: (e) => {
      e.preventDefault()
      dispatch({ type: SIGNOUT_REQUEST })
    }
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    loggedIn: state.auth.loggedIn
  }
}

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App)

export default AppContainer
