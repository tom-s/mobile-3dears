import { call, put } from 'redux-saga/effects'
import { takeEvery } from 'redux-saga'
import { EXERCISE_LOAD_REQUEST, EXERCISE_LOAD_SUCCESS, EXERCISE_LOAD_ERROR } from 'actions/training'
import { getExercise } from 'services/exerciseFactory'

export function * exerciseLoadSaga ({ payload }) {
  try {
    // Fetch exercise
    const { assets, exercise } = getExercise()
    console.log("loaded assets", assets)
  } catch (e) {
    console.log("error", e)
     yield put({ type: EXERCISE_LOAD_ERROR })
  }

}

function * watchExercise () {
  yield [
    takeEvery(EXERCISE_LOAD_REQUEST, exerciseLoadSaga)
  ]
}

export default watchExercise
