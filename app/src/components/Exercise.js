import React from 'react'
import { EXERCISE_TYPES } from 'actions/exercise'
import Matching from 'components/exercise/Matching'
import Quizz from 'components/exercise/Quizz'
import Test from 'components/exercise/Test'

const NotAvailable = () => (
  <div> This exercise is not available </div>
)

const Exercise = (props) => {
  const { exercise } = props
  if (!exercise) return <noscript />

  let exerciseComponent

  switch (exercise.type) {
    case EXERCISE_TYPES.quizz:
      exerciseComponent = <Quizz exercise={exercise} />
      break
    case EXERCISE_TYPES.matching:
      exerciseComponent = <Matching exercise={exercise} />
      break
    case EXERCISE_TYPES.test:
      exerciseComponent = <Test exercise={exercise} />
      break
    default:
      exerciseComponent = <NotAvailable />
  }

  return (
    <div className="Exercise">
      {exerciseComponent}
    </div>
  )
}

export default Exercise

