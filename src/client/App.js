import React from 'react'
import { ThemeProvider } from 'styled-components'

import { Routes } from './components/Routes/index'
import universalTheme from './styles/universal.json'

if (process.env.WEBPACK) {
  require('react-select/dist/react-select.css')
  require('../../bower_components/font-awesome/css/font-awesome.min.css')
  require('./styles/Select.css')
  require('./styles/Slider.css')
  require('./styles/Modal.css')
  require('./styles/Burger.css')
}

// App
const App = (props) => {
  return (
    <ThemeProvider theme={universalTheme}>
      <Routes />
    </ThemeProvider>
  )
}

export default App
