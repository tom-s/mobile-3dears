import { connect } from 'react-redux'
import Dashboard from '../../components/Dashboard'

const mapDispatchToProps = (dispatch) => {}

const mapStateToProps = (state, ownProps) => {
  return {}
}

const DashboardContainer = connect(mapStateToProps)(Dashboard)

export default DashboardContainer