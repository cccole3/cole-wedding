import React from 'react'

import '../Theme/css/Navigation.css'
import { ThemeProps } from '../Theme/Theme'
import { NavigationBanner } from './NavigationBanner'
import { NavigationMain } from './NavigationMain'
import { NavigationSwitch } from './NavigationSwitch'

export class Navigation extends React.Component<ThemeProps, object> {
  render() {
    const { bg, variant } = this.props
    return (
      <>
        <NavigationBanner bg={bg} variant={variant} />
        <NavigationMain bg={bg} variant={variant} />
        <div>
          <NavigationSwitch />
        </div>
      </>
    )
  }
}
