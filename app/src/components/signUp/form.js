import React from 'react'
import {reduxForm} from 'redux-form'
import {validate} from './validate'
import FormError from '../common/formError'

let SignUpForm = (props) => {
  const { fields: { email, password, passwordConfirmation }, handleSubmit, invalid } = props

  return (
    <form className="Form" onSubmit={handleSubmit}>
      <fieldset className="form-group">
        <label htmlFor="email" className="pull-left">Email</label>
        <input type="email" className="form-control" placeholder="Email" {...email}/>
        <FormError element={email} />
      </fieldset>
      <fieldset className="form-group">
        <label htmlFor="password" className="pull-left">Password</label>
        <input type="password" className="form-control" placeholder="Password" {...password}/>
        <FormError element={password} />
      </fieldset>
      <fieldset className="form-group">
        <label htmlFor="passwordConfirmation" className="pull-left">Password confirmation</label>
        <input type="password" className="form-control" placeholder="Password confirmation" {...passwordConfirmation}/>
        <FormError element={passwordConfirmation} />
      </fieldset>
      <button type="submit" className="Submit btn btn-signin" value="Sign up" disabled={invalid}>Sign up</button>
    </form>
  )
}

SignUpForm = reduxForm({
  form: 'signUp',
  fields: ['email', 'password', 'passwordConfirmation'],
  validate
})(SignUpForm)

export default SignUpForm
