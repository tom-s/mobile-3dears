import { connect } from 'react-redux'
import Training from 'components/Training'

const mapStateToProps = (state, ownProps) => {
  const { params: { exerciseId, type }} = ownProps
  const exercise = null

  return {
    query: {
      exerciseId,
      type
    },
    exercise
  }
}

const TrainingContainer = connect(mapStateToProps)(Training)

export default TrainingContainer
