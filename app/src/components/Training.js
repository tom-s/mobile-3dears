import React, { Component } from 'react'

class Training extends Component {
  constructor (props) {
    super(props)
  }

  componentDidMount() {
    const { exerciseId, type, loadExercise } = this.props
    loadExercise(type, exerciseId)
  }

  render() {
    const { type } = this.props

    return (
      <section className="Training">
        <div className="container">
          { type }
        </div>
      </section>
    )
  }
}

export default Training
