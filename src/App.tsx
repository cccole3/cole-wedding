import React from 'react'
import { HashRouter as Router } from 'react-router-dom'
import { ThemeProps } from './Theme/Theme'

import { Navigation } from './Navigation/Navigation'

export class App extends React.Component<ThemeProps, object> {
  render() {
    const { bg, variant } = this.props
    return (
      <Router basename="/cole-wedding">
        <Navigation bg={bg} variant={variant} />
      </Router>
    )
  }
}
