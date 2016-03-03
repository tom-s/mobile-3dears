import React, { Component } from 'react'
import { connect } from 'react-redux'

class AboutPage extends Component {
  render() {
    return (
      <div>
        about page
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    errorMessage: state.errorMessage
  }
}

export default connect(mapStateToProps)(AboutPage)