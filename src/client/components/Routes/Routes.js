import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'

import { Header } from '../Header/index'
import { Home } from '../Home/index'
import { Gallery } from '../Gallery/index'
import { About } from '../About/index'
import {
  BlockContainer,
} from '../BasicComponents/index'

// Default Route
const redirect = (path) => (props) => (
  <Redirect to={{
    pathname: path,
    state: { from: props.location },
  }} />
)

const DefaultRoute = (props) => {
  return (
    <Route render={redirect('/home')} />
  )
}

const Routes = (props) => {
  return (
    <BlockContainer>
      <Route component={Header} />
      <Switch>
        <Route exact path='/home' component={Home} />
        <Route exact path='/gallery' component={Gallery} />
        <Route exact path='/gallery/:artID' component={Gallery} />
        <Route exact path='/about' component={About} />
        <DefaultRoute />
      </Switch>
    </BlockContainer>
  )
}

export default Routes
