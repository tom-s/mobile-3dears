import { connect } from 'react-redux'
import Training from 'components/Training'

const mapStateToProps = (state, ownProps) => {
  const { params: { exerciseId, type }} = ownProps
  return {
    exerciseId,
    type
  }
}

const TrainingContainer = connect(mapStateToProps)(Training)

export default TrainingContainer
