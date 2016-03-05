import React from 'react'
import { Link } from 'react-router'

const NavBarRight = (props) => {
  return (
    <ul className="NavBar nav navbar-nav navbar-right">
      <li><Link to="/exercises">Exercises</Link></li>
      <li><Link to="/pricing">Pricing</Link></li>
      <li><Link to="/sign_up">Sign up</Link></li>
      <li><Link to="/sign_in">Sign in</Link></li>
    </ul>
  )
}

export default NavBarRight