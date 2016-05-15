import React from 'react'
import QueryExercise from 'containers/query/Exercise'
import Exercise from 'components/Exercise'

const Training = (props) => {
  const { query : { exerciseId, type }, exercise } = props

  return (
    <section className='Training'>
      <QueryExercise id={exerciseId} type={type} />
      <div className='container'>
        Exercise ID: {exerciseId}
        Type: {type}
        <Exercise exercise={exercise} />
      </div>
    </section>
  )
}


export default Training
