import { connect } from 'react-redux'
import SignUp from '../../components/SignUp'
import {SIGNUP_REQUEST} from '../../actions/signUp'

const mapDispatchToProps = (dispatch) => {
  return {
    onSubmit: (values) => {
      dispatch({ type: SIGNUP_REQUEST, payload: values })
    }
  }
}

const mapStateToProps = (state, ownProps) => ({})

const SignUpContainer = connect(mapStateToProps, mapDispatchToProps)(SignUp)

export default SignUpContainer