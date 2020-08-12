import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import { ThemeProps } from '../Theme/Theme'
import { Event } from './Event'

export class NavigationBanner extends React.Component<ThemeProps, object> {
  render() {
    const { bg, variant } = this.props

    return (
      <Navbar
        expand="md"
        bg={bg}
        variant={variant}
        className="justify-content-center NavMain-Banner"
      >
        <Navbar.Brand>
          <Event />
        </Navbar.Brand>
      </Navbar>
    )
  }
}
