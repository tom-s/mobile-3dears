import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Growler from 'components/common/Growler'
import * as growlerActionCreators from 'actions/growler'

const mapStateToProps = (state) => ({
  growler: state.growler
})

const mapDispatchToProps = (dispatch) => bindActionCreators(growlerActionCreators, dispatch)

const GrowlerContainer = connect(mapStateToProps, mapDispatchToProps)(Growler)

export default GrowlerContainer
