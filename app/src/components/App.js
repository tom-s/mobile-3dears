import React, {Component} from 'react'
import 'onsenui'
import {
  Page, Button, Splitter, SplitterSide, SplitterContent, Toolbar,
  List, ListHeader, ListItem, Navigator, Ripple
} from 'react-onsenui'

// Style
import 'assets/styles/main.scss'

// Components
class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      side: {
        isOpen: false
      }
    }
  }

  render() {
    return (
      <Navigator
        initialRoute={{title: 'Home', id: 'home'}}
        animation='slide'
        renderPage={this.renderPage.bind(this)}
      />
    )
  }

  renderPage(route, navigator) {
    const { side: {isOpen} } = this.state

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
             <List
              dataSource={[{ title: 'Exercise', id: 'exercise'}]}
              renderRow={(row, idx) => (
                <ListItem key={idx}>
                  <Button modifier='outline' ripple onClick={this.changeRoute.bind(this, navigator, row)}> {row.title} </Button>
                </ListItem>
              )}
            />
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
                {route.title}
              </div>
            </div>
          </Page>
        </SplitterContent>
      </Splitter>

    )
  }

  componentDidMount() {
    this.openSide()
  }
  changeRoute(navigator, route) {
    navigator.pushPage(route)
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
