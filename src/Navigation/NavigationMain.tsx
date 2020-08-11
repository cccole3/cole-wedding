import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { LinkContainer } from 'react-router-bootstrap'
import { ThemeProps } from '../Theme/Theme'

import { NavigationBrand } from './NavigationBrand'
import { Pages } from './Pages'

export class NavigationMain extends React.Component<ThemeProps, object> {
  render() {
    const { bg, variant } = this.props

    const PageList = Pages.map(Pages => (
      <Nav.Item key={Pages.id}>
        <LinkContainer to={Pages.link}>
          <Nav.Link>{Pages.name}</Nav.Link>
        </LinkContainer>
      </Nav.Item>
    ))

    return (
      <Navbar
        collapseOnSelect={true}
        expand="lg"
        bg={bg}
        variant={variant}
        sticky="top"
      >
        <NavigationBrand />
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav fill={true}>{PageList}</Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}
