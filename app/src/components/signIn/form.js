import React from 'react'
import {reduxForm} from 'redux-form'
import {Link} from 'react-router'
import {validate} from './validate'
import FormError from '../common/FormError'

let SignInForm = (props) => {
  const { fields: { email, password }, handleSubmit, invalid } = props

  return (
    <form className="Form" onSubmit={handleSubmit}>
      <fieldset className="form-group">
        <label htmlFor="email" className="pull-left">Email</label>
        <input type="text" className="form-control" placeholder="Email" {...email}/>
        <FormError element={email} />
      </fieldset>
      <fieldset className="form-group">
        <label htmlFor="password" className="pull-left">Password</label>
        <input type="password" className="form-control" placeholder="Password" {...password}/>
        <FormError element={password} />
      </fieldset>
      <button type="submit" className="Submit btn btn-signin" value="Sign In" disabled={invalid}>Sign in</button>
      <Link className="PasswordForgotten" to="/forgot">Forgot Password?</Link>
    </form>
  )
}

SignInForm = reduxForm({
  form: 'signIn',
  fields: ['email', 'password'],
  validate
})(SignInForm)

export default SignInForm
