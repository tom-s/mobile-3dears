import React from 'react'

// Style
import '../../styles/main.scss'

// Components
import Header from './Header'
import Footer from './Footer'

const App = (props) => {
  const { children } = props

  return (
    <div>
      <Header />
      {children}
       <Footer />
    </div>
  )
}

export default App