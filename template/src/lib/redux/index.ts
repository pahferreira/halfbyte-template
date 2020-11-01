import { applyMiddleware, createStore, compose } from 'redux'
import createSagaMiddleware, { SagaMiddleware } from 'redux-saga'
import rootSaga from 'lib/saga'
import rootReducer from 'storage'

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose
  }
}

const sagaMiddleware: SagaMiddleware = createSagaMiddleware()

const composeEnhancers: typeof compose =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore<any, any, any, any>(
  rootReducer,
  composeEnhancers(applyMiddleware(sagaMiddleware))
)

sagaMiddleware.run(rootSaga)

export default store