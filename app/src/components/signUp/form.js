import React from 'react'
import {reduxForm} from 'redux-form'

let SignUpForm = (props) => {
  const { fields: { email, password, passwordConfirmation }, handleSubmit } = props

  return (
    <form className="Form" onSubmit={handleSubmit}>
      <fieldset className="form-group">
        <label for="email" className="pull-left">Email</label>
        <input type="text" className="form-control" placeholder="Email" {...email}/>
      </fieldset>
      <fieldset className="form-group">
        <label for="password" className="pull-left">Password</label>
        <input type="password" className="form-control" placeholder="Password" {...password}/>
      </fieldset>
      <fieldset className="form-group">
        <label for="passwordConfirmation" className="pull-left">Password confirmation</label>
        <input type="password" className="form-control" placeholder="Password confirmation" {...passwordConfirmation}/>
      </fieldset>
      <button className="Submit btn btn-signin" value="Sign up">Sign up</button>
    </form>
  )
}

SignUpForm = reduxForm({
  form: 'signUp',
  fields: ['email', 'password', 'passwordConfirmation']
})(SignUpForm)

export default SignUpForm
