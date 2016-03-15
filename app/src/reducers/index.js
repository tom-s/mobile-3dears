import { routerReducer as routing } from 'react-router-redux'
import { reducer as formReducer } from 'redux-form'
import { combineReducers } from 'redux'
import auth from './auth'
import growler from './growler'

const rootReducer = combineReducers({
  form: formReducer,
  growler,
  routing,
  auth
})

export default rootReducer
