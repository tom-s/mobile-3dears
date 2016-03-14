
import React, { Component, PropTypes } from 'react'
import { Provider } from 'react-redux'
import routes from '../routes'
import { Router } from 'react-router'

export default class Root extends Component {
  render () {
    const { store, history } = this.props
    return (
      <Provider store={store}>
        <div className="Root">
          <Router history={history}>
            {routes(store)}
          </Router>
        </div>
      </Provider>
    )
  }
}

Root.propTypes = {
  store: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
}