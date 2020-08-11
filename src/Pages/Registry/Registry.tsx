import React from 'react'
import Iframe from 'react-iframe'
import Container from 'react-bootstrap/Container'
import './Registry.css'

export class Registry extends React.Component {
  render() {
    return (
      <Container fluid={true}>
        <Iframe url="https://www.zola.com/registry/christopherandmichellemay22"></Iframe>
      </Container>
    )
  }
}
