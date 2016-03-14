import React from 'react'
import { Link } from 'react-router'

const NavBarRightLoggedIn = (props) => {
  const { signOut } = props
  return (
    <ul className="NavBar nav navbar-nav navbar-right">
      <li><Link to="/exercises">Exercises</Link></li>
      <li><Link to="/pricing">Pricing</Link></li>
      <li><Link to="/sign_out" onClick={signOut} >Sign out</Link></li>
    </ul>
  )
}

export default NavBarRightLoggedIn