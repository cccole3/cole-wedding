import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { LinkContainer } from 'react-router-bootstrap'
import { ThemeProps } from '../Theme/Theme'

import { NavigationBrand } from './NavigationBrand'

export class NavigationMain extends React.Component<ThemeProps, object> {
  render() {
    const { bg, variant } = this.props
    return (
      <Navbar
        collapseOnSelect={true}
        expand="md"
        bg={bg}
        variant={variant}
        sticky="top"
      >
        <NavigationBrand />
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <LinkContainer to="/">
              <Nav.Link>Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/">
              <Nav.Link>About</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/">
              <Nav.Link>Registry</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/">
              <Nav.Link>The Venue</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}
