import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

class NoMatch extends Component {

  render() {
    return (
      <div>
        404 error
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
  }
}

export default connect(mapStateToProps)(NoMatch)