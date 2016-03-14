import { routerReducer as routing } from 'react-router-redux'
import { reducer as formReducer } from 'redux-form'
import auth from './auth'
import { combineReducers } from 'redux'
import { GrowlerReducer } from 'flash-notification-react-redux'

const rootReducer = combineReducers({
  form: formReducer,
  growler: GrowlerReducer,
  routing,
  auth
})

export default rootReducer
