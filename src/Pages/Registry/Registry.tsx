import React from 'react'
// import Iframe from 'react-iframe'
import Container from 'react-bootstrap/Container'

interface SelectProtected {
  readonly inputElement: HTMLElement
}

export class Registry extends React.Component {
  componentDidMount() {
    const script = document.createElement('script')
    script.id = 'zola-wjs'
    script.async = true
    script.src = 'https://widget.zola.com/js/widget.js'
    const zola = document.getElementById('zola')

    zola!.appendChild(script)
  }
  render() {
    return (
      <Container fluid={true} id="zola">
        <a
          className="zola-registry-embed"
          href="https://www.zola.com/registry/christopherandmichellemay22"
          data-registry-key="christopherandmichelle22"
        >
          Our Zola Wedding Registry
        </a>
      </Container>
    )
  }
}
