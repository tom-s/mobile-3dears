import React from 'react'
import SignInForm from './signIn/form'

const SignIn = (props) => {
  return (
    <section className="SignIn">
      <div class="container">
        <h3 class="text-center">Sign in</h3>
        <p class="text-center">Don't have an account yet? <a href="/sign_up">Create an account</a></p>
        <SignInForm />
      </div>
    </section>
  )
}

export default SignIn