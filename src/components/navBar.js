import React from "react"
import { Link } from "gatsby"

import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap"

const CustomNavbar = ({ pageInfo }) => {
  console.log(pageInfo)
  return (
    <>
      <Navbar variant="dark" expand="md" id="site-navbar">
        {/* <Container> */}
        <Link to="/" className="link-no-style">
          <Navbar.Brand as="span">TAMS | CSO</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto" activeKey={pageInfo && pageInfo.pageName}>
            <Link to="/" className="link-no-style">
              <Nav.Link as="span" eventKey="index">
                HOME
              </Nav.Link>
            </Link>
            <Link to="/duck-diaries" className="link-no-style">
              <Nav.Link as="span" eventKey="duck-diaries">
                DUCK DIARIES
              </Nav.Link>
            </Link>
            <Link to="/committees" className="link-no-style">
              <Nav.Link as="span" eventKey="committees">
                COMMITTEES
              </Nav.Link>
            </Link>
            <Link to="/about" className="link-no-style">
              <Nav.Link as="span" eventKey="about">
                ABOUT
              </Nav.Link>
            </Link>
          </Nav>
          {/* <Nav className="ml-auto">
            <Form inline onSubmit={e => e.preventDefault()}>
              <Form.Group>
                <FormControl
                  type="text"
                  placeholder="Fake Search"
                  className="mr-2"
                />
              </Form.Group>
              <Button>Fake Button</Button>
            </Form>
          </Nav> */}
        </Navbar.Collapse>
        {/* </Container> */}
      </Navbar>
    </>
  )
}

export default CustomNavbar
