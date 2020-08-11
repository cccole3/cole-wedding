import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { Home } from '../Pages/Home'

export class NavigationSwitch extends React.Component {
  render() {
    return (
      <Switch>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    )
  }
}
