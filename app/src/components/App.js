import React from 'react'
import Growler from '../containers/Growler'

// Style
import '../../assets/styles/main.scss'

// Components
import Header from './Header'
import Footer from './Footer'

const App = (props) => {
  const { children, loggedIn, signOut } = props

  return (
    <div className="App">
      <Header loggedIn={loggedIn} signOut={signOut}/>
      {children}
      <Footer />
      <Growler shownFor="5000"/>
    </div>
  )
}

export default App
