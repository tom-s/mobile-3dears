import React from 'react'
import 'onsenui'
import {Page, Button} from 'react-onsenui'

// Style
import 'assets/styles/main.scss'

// Components

const App = (props) => {
  const { children } = props

  return (
    <div className="App">
      <Page>
        {children}
         <Button>Tap me!</Button>
     </Page>
    </div>
  )
}

export default App
