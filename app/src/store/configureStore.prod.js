import { createStore, applyMiddleware } from 'redux'
import { routerMiddleware } from 'react-router-redux'
import { hashHistory } from 'react-router'
import thunk from 'redux-thunk'
import createSagaMiddleware from 'redux-saga'
import rootReducer from '../reducers'
import sagas from '../sagas'

export default function configureStore (initialState) {
  const sagaMiddleware = createSagaMiddleware(sagas)
  const routingMiddleware = routerMiddleware(hashHistory)

  return createStore(
    rootReducer,
    initialState,
    applyMiddleware(thunk, routingMiddleware, sagaMiddleware)
  )
}