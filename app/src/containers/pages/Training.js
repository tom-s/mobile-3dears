import { connect } from 'react-redux'
import Training from '../../components/Training'
import { EXERCISE_REQUEST } from '../../actions/training'

const mapDispatchToProps = (dispatch, ownProps) => {
  const { params: { type } } = ownProps

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
