import { connect } from 'react-redux'
import SignIn from '../../components/SignIn'
import {SIGNIN_REQUEST} from '../../actions/signIn'

const mapDispatchToProps = (dispatch) => {
  return {
    onSubmit: (values) => {
      dispatch({ type: SIGNIN_REQUEST, payload: values })
    }
  }
}

const mapStateToProps = (state, ownProps) => ({})

const SignInContainer = connect(mapStateToProps, mapDispatchToProps)(SignIn)

export default SignInContainer