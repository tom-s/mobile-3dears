import React from 'react'
import SignUpForm from './signUp/form'

const SignUp = (props) => {
  const { onSubmit } = props

  return (
    <section className="SignUp">
      <div className="container">
        <h3 className="text-center">Sign up</h3>
        <SignUpForm onSubmit={onSubmit}/>
      </div>
    </section>
  )
}

export default SignUp