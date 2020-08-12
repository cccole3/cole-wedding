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
        <Navbar.Brand href="https://calendar.google.com/event?action=TEMPLATE&tmeid=MWQ3bWJ1Y2VrNzhxZGtoYjBwcjRhaXBjN2UgY2Njb2xlM0Bt&tmsrc=cccole3%40gmail.com">
          <span>#ColeLottaLove! | May 5th, 2021</span>
        </Navbar.Brand>
      </Navbar>
    )
  }
}
