import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import { ThemeProps } from '../Theme/Theme'

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
          <h1>You're Invited!!</h1>
        </Navbar.Brand>
      </Navbar>
    )
  }
}
