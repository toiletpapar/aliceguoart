import React from 'react'
import { Route } from 'react-router-dom'

import { Header } from '../Header/index'
import { Home } from '../Home/index'
import {
  BlockContainer,
} from '../BasicComponents/index'

const Routes = (props) => {
  return (
    <BlockContainer>
      <Route component={Header} />
      <Route path='/home' component={Home} />
    </BlockContainer>
  )
}

export default Routes
