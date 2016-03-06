import * as ActionTypes from '../actions'
import merge from 'lodash/merge'
import { routerReducer as routing } from 'react-router-redux'
import { reducer as formReducer } from 'redux-form'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  routing: routing,
  form: formReducer
})

export default rootReducer