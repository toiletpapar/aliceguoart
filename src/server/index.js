import express from 'express'
import chalk from 'chalk'
import React from 'react'
import morgan from 'morgan'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import bodyParser from 'body-parser'
import { ServerStyleSheet } from 'styled-components'

import App from '../client/App'
import makeStore from '../client/store'
import { compileInitialState } from '../client/reducers/InitialStates'

console.log(process.env)
const port = process.env.PORT || process.env.NODE_PORT || 9000
const host = process.env.NODE_HOST || '127.0.0.1'
const nodeEnv = process.env.NODE_ENV || 'development'

const app = express()

app.use(bodyParser.json())
app.use(morgan('dev'))

app.set('view engine', 'ejs')
app.set('views', 'views')

/**
 *  Assets
 */
app.use('/', express.static('./dist'))
app.use('/', express.static('./public'))

/**
 *  Server Rendering
 */

app.get('*', (req, res) => {
  // This context object contains the results of the render
  const context = {}

  // Compile an initial state
  let preloadedState = compileInitialState({

  })

  // Preloaded state to send to the client
  const store = makeStore(preloadedState)

  const sheet = new ServerStyleSheet()
  const html = renderToString(sheet.collectStyles(
    <StaticRouter location={req.url} context={context}>
      <Provider store={store}>
        <App />
      </Provider>
    </StaticRouter>
  ))
  const styleTags = sheet.getStyleTags()

  // Grab the initial state from our Redux store
  const finalState = store.getState()

  // context.url will contain the URL to redirect to if a <Redirect> was used
  if (context.url) {
    res.writeHead(302, {
      Location: context.url,
    })
    return res.end()
  } else {
    return res.render('index', {
      app: html,
      state: finalState,
      styles: styleTags
    })
  }
})

app.listen(port, host, () => {
  console.log(`${chalk.blue('======================================')}`)
  console.log(`NODE ENV: ${chalk.red(nodeEnv)}`)
  console.log(`Node Server started on ${chalk.green(`${host}:${port}`)}`)
})
