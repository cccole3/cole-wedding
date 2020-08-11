import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import logo from '../logo.svg'
import { LinkContainer } from 'react-router-bootstrap'

export class NavigationBrand extends React.Component {
  render() {
    return (
      <LinkContainer to="/">
        <Navbar.Brand>
          <img
            alt=""
            src={logo}
            width="30"
            height="30"
            className="d-inline-block align-top"
          />
          Home
        </Navbar.Brand>
      </LinkContainer>
    )
  }
}
