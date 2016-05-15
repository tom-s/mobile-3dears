import React, {Component} from 'react'
import 'onsenui'
import { Page, Button, Splitter, SplitterSide, SplitterContent, Toolbar } from 'react-onsenui'

// Style
import 'assets/styles/main.scss'

// Components

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      side: {
        isOpen: false
      }
    }
  }

  render() {
    const { children } = this.props
    const { side: {isOpen} } = this.state
    console.log('isopen', isOpen)

    return (
      <Splitter>
        <SplitterSide
          side='left'
          isCollapsed={true}
          isOpen={isOpen}
          onClose={::this.closeSide}
          isSwipeable={false}
          width='80%'
          className='Side'>
          <Page>
            Menu content
          </Page>
        </SplitterSide>
        <SplitterContent>
          <Page>
            <div className='navigation-bar'>
              <div className='navigation-bar__left'>
                <span className='toolbar-button--quiet navigation-bar__line-height'>
                  <i className='zmdi zmdi-menu' onClick={::this.openSide}></i>
                </span>
              </div>
              <div className='navigation-bar__center'>
                Navigation Bar
              </div>
            </div>
            {children}
          </Page>
        </SplitterContent>
      </Splitter>
    )
  }

  openSide() {
    const { side } = this.state
    side.isOpen = true
    this.setState({
      side
    })
  }

  closeSide() {
    const { side } = this.state
    side.isOpen = false
    this.setState({
      side
    })
  }

}

export default App
