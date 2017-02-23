import React from 'react'
import { render } from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import makeStore from './store'
import 'rxjs'

import App from './App'

// Grab the state from a global variable injected into the server-generated HTML
const preloadedState = window.__PRELOADED_STATE__

// Allow the passed state to be garbage-collected
delete window.__PRELOADED_STATE__

// Create Redux store with initial state
const store = makeStore(preloadedState)

const renderDom = () => {
  render(
    <AppContainer>
      <BrowserRouter>
        <Provider store={store}>
          <App />
        </Provider>
      </BrowserRouter>
    </AppContainer>,
    document.getElementById('root')
  )
}

renderDom()

if (module.hot) {
  module.hot.accept('./App', renderDom)
}
