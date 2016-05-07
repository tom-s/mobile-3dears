import React from 'react'
import { EXERCISE_TYPES } from 'actions/exercise'

const NoExercise = () => (
  <div> This exercise is not available </div>
)

const Exercise = (props) => {
  const { exercise, exercise : { type } } = props
  let exerciseComponent

  switch (type) {
    case EXERCISE_TYPES.test:
      break;
    default:
      exerciseComponent = <NoExercise />
  }

  return (
    <div className="Exercise">
      {exerciseComponent}
    </div>
  )
}

export default Exercise

