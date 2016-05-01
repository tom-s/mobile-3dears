import { call, put } from 'redux-saga/effects'
import { takeEvery } from 'redux-saga'
import { EXERCISE_LOAD_REQUEST, EXERCISE_LOAD_SUCCESS, EXERCISE_LOAD_ERROR } from '../actions/exercise'
import { getExercise } from '../services/exerciseFactory'

export function * exerciseLoadSaga ({ payload }) {
  // Fetch exercise
  const exercise = getExercise()
  console.log('loaded exercise', exercise) 
}

function * watchExercise () {
  yield [
    takeEvery(EXERCISE_LOAD_REQUEST, exerciseLoadSaga)
  ]
}

export default watchExercise
