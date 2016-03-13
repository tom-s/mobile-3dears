import { routerReducer as routing } from 'react-router-redux'
import { reducer as formReducer } from 'redux-form'
import { combineReducers } from 'redux'
import GrowlerReducer from 'flash-notification-react-redux'

const rootReducer = combineReducers({
  routing: routing,
  form: formReducer,
  growler: GrowlerReducer
})

export default rootReducer
