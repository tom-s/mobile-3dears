import React from 'react'
import SignInForm from './signIn/form'
import { Link } from 'react-router'

const SignIn = (props) => {
  const { onSubmit } = props

  return (
    <section className="SignIn">
      <div className="container">
        <h3 className="text-center">Sign in</h3>
        <p className="text-center">{"Don't have an account yet?"} <Link to="/sign_up">Create an account</Link></p>
        <SignInForm onSubmit={onSubmit}/>
      </div>
    </section>
  )
}

export default SignIn
