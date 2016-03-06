import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import createLogger from 'redux-logger'
import createSagaMiddleware from 'redux-saga'
import rootReducer from '../reducers'
import sagas from '../sagas'
import DevTools from '../containers/DevTools'

export default function configureStore (initialState) {
  const sagaMiddleware = createSagaMiddleware(sagas)

  const store = createStore(
    rootReducer,
    initialState,
      compose(
        applyMiddleware(thunk, sagaMiddleware, createLogger()),
        DevTools.instrument()
      )
  )

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers').default
      store.replaceReducer(nextRootReducer)
    })
  }

  return store
}