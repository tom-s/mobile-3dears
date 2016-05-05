import { connect } from 'react-redux'
import Training from '../../components/Training'
import { TRAINING_TYPES, EXERCISE_REQUEST } from '../../actions/training'
import { URL_ERROR } from '../../actions/url'

const mapDispatchToProps = (dispatch, ownProps) => {
  const { params: { type }, location: { pathname } } = ownProps

  // Redirect to dashboard if training type is not valid
  if (!TRAINING_TYPES[type]) {
    dispatch({
      type: URL_ERROR,
      payload: {
        referer: pathname
      }
    })
  }

  return {
    loadExercise: (type, id) => {
      dispatch({ type: EXERCISE_REQUEST, payload: { type, id }})
    }
  }
}

const mapStateToProps = (state, ownProps) => {
  const { params: { type } } = ownProps
  return {
    type
  }
}

const TrainingContainer = connect(mapStateToProps, mapDispatchToProps)(Training)

export default TrainingContainer
