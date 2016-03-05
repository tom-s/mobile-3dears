import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import App from '../components/App'

const mapDispatchToProps = (dispatch) => ({})

const mapStateToProps = (state, ownProps) => {
  console.log('state', state, ownProps)
  return {}
}

const AppContainer = connect(mapStateToProps)(App)

export default AppContainer