import React from 'react'

// Style
import 'assets/styles/main.scss'

// Components

const App = (props) => {
  const { children } = props

  return (
    <div className="App">
      {children}
    </div>
  )
}

export default App
