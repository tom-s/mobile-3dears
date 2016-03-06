import React from 'react'
import SignInForm from './signIn/form'

const SignIn = (props) => {
  const { onSubmit } = props
  console.log('handleSubmit', onSubmit)

  return (
    <section className="SignIn">
      <div className="container">
        <h3 className="text-center">Sign in</h3>
        <p className="text-center">Don't have an account yet? <a href="/sign_up">Create an account</a></p>
        <SignInForm onSubmit={onSubmit}/>
      </div>
    </section>
  )
}

export default SignIn