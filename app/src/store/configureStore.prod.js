import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import createSagaMiddleware from 'redux-saga'
import rootReducer from '../reducers'
import sagas from '../sagas'

export default function configureStore (initialState) {
  const sagaMiddleware = createSagaMiddleware(sagas)

  return createStore(
    rootReducer,
    initialState,
    applyMiddleware(thunk, sagaMiddleware)
  )
}