import React from 'react'

import { Link } from 'react-router-dom'

import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'

const Header = () => {
  return (
    <Navbar bg="primary" variant="dark">
      <Container>
        <Navbar.Brand as={Link} to="/">
          Api GitHub
        </Navbar.Brand>
      </Container>
    </Navbar>
  )
}

export default Header
