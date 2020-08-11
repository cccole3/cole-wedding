import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { Home } from '../Pages/Home/Home'
import { Story } from '../Pages/Story/Story'
import { Party } from '../Pages/Party/Party'
import { Travel } from '../Pages/Travel/Travel'
import { Todo } from '../Pages/Todo/Todo'
import { Schedule } from '../Pages/Schedule/Schedule'
import { Photos } from '../Pages/Photos/Photos'
import { Registry } from '../Pages/Registry/Registry'
import { RSVP } from '../Pages/RSVP/RSVP'

export class NavigationSwitch extends React.Component {
  render() {
    return (
      <Switch>
        <Route path="/story">
          <Story />
        </Route>
        <Route path="/party">
          <Party />
        </Route>
        <Route path="/travel">
          <Travel />
        </Route>
        <Route path="/todo">
          <Todo />
        </Route>
        <Route path="/schedule">
          <Schedule />
        </Route>
        <Route path="/photos">
          <Photos />
        </Route>
        <Route path="/registry">
          <Registry />
        </Route>
        <Route path="/rsvp">
          <RSVP />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    )
  }
}
