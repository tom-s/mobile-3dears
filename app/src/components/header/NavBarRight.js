import React from 'react'

const NavBarRight = (props) => {
  return (
    <ul className="NavBar nav navbar-nav navbar-right">
      <li><a href="/exercises">Exercises</a></li>
      <li><a href="/pricing">Pricing</a></li>
      <li><a href="/sign_up">Create Account</a></li>
      <li><a href="/sign_in">Sign in</a></li>
    </ul>
  )
}

export default NavBarRight