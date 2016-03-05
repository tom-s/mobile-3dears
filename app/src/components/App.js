import React from 'react'

// Style
import '../../styles/main.scss'

// Components
import Header from './Header'

const App = (props) => {
  const { children } = props
  return (
    <div>
      <Header />
      {children}
    </div>
  )
}

export default App