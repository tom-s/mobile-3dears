import { Promise } from 'es6-promise'
import { INIT_REQUEST } from 'actions/init'
import { URL_ERROR } from 'actions/url'
import { TRAINING_TYPES } from '../actions/training'

const checkTraining = store => ( nextState, replace, cb) => {
  const { params: { type, exerciseId }, location: { pathname } } = nextState
  // Redirect to dashboard if training type is not valid or id not provided
  if (!TRAINING_TYPES[type] || !exerciseId) {
    store.dispatch({
      type: URL_ERROR,
      payload: {
        referer: pathname
      }
    })
  }
  cb()
}

const initRouter = (store) => {
  return {
    checkTraining: checkTraining(store)
  }
}

export default initRouter