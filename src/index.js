import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import Counter from './containers/Counter'
import rootReducer from './reducers'
import './style.css'

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

ReactDOM.render(
  <Provider store={store}>
    <Counter label="I'm a counter" />
  </Provider>,
  document.getElementById('react-root')
)

if (module.hot) {
  module.hot.accept('./reducers', () => {
    const nextRootReducer = require('./reducers').default

    store.replaceReducer(nextRootReducer)
  })
}
