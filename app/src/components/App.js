import React from 'react'
import { GrowlerContainer } from 'flash-notification-react-redux'

// Style
import '../../assets/styles/main.scss'

// Components
import Header from './Header'
import Footer from './Footer'

const App = (props) => {
  const { children } = props

  return (
    <div className="App">
      <Header />
      {children}
      <Footer />
      <GrowlerContainer shownFor="5000"/>
    </div>
  )
}

export default App
