import { routerReducer as routing } from 'react-router-redux'
import { reducer as formReducer } from 'redux-form'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  form: formReducer,
  routing
})

export default rootReducer
