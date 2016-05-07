import React, { Component } from 'react'
import { connect } from 'react-redux'
import { EXERCISE_LOAD_REQUEST } from 'actions/training'

class QueryExercise extends Component {
  render () {
    return <span />
  }

  /******************************** COMPONENT LIFECYCLE ********************************/
  componentWillMount () {
    this.request(this.props)
  }

  /******************************** CUSTOM METHODS ********************************/
  request (props) {
    const { id, type, loadExercise } = props
    loadExercise() // fetch all books
  }
}

const mapStateToProps = () => ({})

const mapDispatchToProps = dispatch => ({
  loadExercise: (type, id) => {
    dispatch({ type: EXERCISE_LOAD_REQUEST, payload: { type, id }})
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(QueryExercise)