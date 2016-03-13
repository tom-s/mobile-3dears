import { connect } from 'react-redux'
import EmailValidation from '../../components/EmailValidation'
import {EMAIL_VALIDATE_REQUEST} from '../../actions/emailValidation'

const mapDispatchToProps = (dispatch) => {
  return {
    emailValidate: (values) => {
      dispatch({ type: EMAIL_VALIDATE_REQUEST, payload: values })
    }
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    email: ownProps.location.query.email,
    token: ownProps.location.query.token
  }
}

const EmailValidationContainer = connect(mapStateToProps, mapDispatchToProps)(EmailValidation)

export default EmailValidationContainer