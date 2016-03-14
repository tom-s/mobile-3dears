import React from 'react'
import { GrowlerContainer } from 'flash-notification-react-redux'

// Style
import '../../assets/styles/main.scss'

// Components
import Header from './Header'
import Footer from './Footer'

class App extends React.Component {
  render () {
    const { children } = this.props

    return (
      <div className="App">
        <Header />
        {children}
         <Footer />
         <GrowlerContainer shownFor="5000"/>
      </div>
    ) 
  }

  componentDidMount () {
    const { initAuth } = this.props
    initAuth() // init auth from cookie
  }
}

export default App