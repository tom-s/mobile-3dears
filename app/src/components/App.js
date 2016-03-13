import React from 'react'
import { GrowlerComponent } from 'flash-notification-react-redux'

// Style
import '../../styles/main.scss'

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
       <GrowlerComponent />
    </div>
  )
}

export default App