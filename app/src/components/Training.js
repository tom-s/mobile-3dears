import React from 'react'
import QueryExercise from 'containers/query/Exercise'

const Training = (props) => {
  console.log("props", props)
  const { exerciseId, type } = props

  return (
    <section className="Training">
      <QueryExercise id={exerciseId} type={type} />
      <div className="container">
        Exercise ID: {exerciseId}
        Type: {type}
      </div>
    </section>
  )
}


export default Training
