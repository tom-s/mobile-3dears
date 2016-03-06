import React from 'react'
import {reduxForm} from 'redux-form'
import {Link} from 'react-router'

let SignInForm = (props) => {
  const { fields: { email, password }, handleSubmit } = props

  return (
    <form className="Form" onSubmit={handleSubmit}>
      <fieldset class="form-group">
        <label for="email" class="pull-left">Email</label>
        <input type="text" className="form-control" placeholder="Email" {...email}/>
      </fieldset>
      <fieldset class="form-group">
        <label for="password" class="pull-left">Password</label>
        <input type="password" className="form-control" placeholder="Password" {...password}/>
      </fieldset>
      <button className="Submit btn btn-signin" type="submit" value="Sign In">Sign in</button>
      <Link className="PasswordForgotten" to="/forgot">Forgot Password?</Link>
    </form>
  )
}

SignInForm = reduxForm({
  form: 'signIn',
  fields: ['email', 'password']
})(SignInForm)

export default SignInForm