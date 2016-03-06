import { connect } from 'react-redux'
import SignIn from '../../components/SignIn'

const mapDispatchToProps = (dispatch) => {
  return {
    onSubmit: (values) => {
      console.log('handle submit', values)
    }
  }
}

const mapStateToProps = (state, ownProps) => ({})

const SignInContainer = connect(mapStateToProps, mapDispatchToProps)(SignIn)

export default SignInContainer