import React from "react"
import { Row, Col, Container, ListGroup } from "react-bootstrap"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout pageInfo={{ pageName: "index" }}>
    <SEO title="Home" keywords={[`gatsby`, `react`, `bootstrap`]} />
    <Container>
      <Row style={{minHeight: "90vh"}}>
        <Col>
        <h2 style={{ textAlign: "center" }}>events & updates</h2>

          <p>
            08/19 + GA how 2 code: for beginners
          </p>
          <p>
            09/05-07 + Hack-a-thon
          </p>
          <p>

          </p>
        </Col>
      </Row>
      <Row>
        <Col md={6}>
          <h4>Hackathon winners</h4>
          <p>Thing one - 3rd place, HackMIT</p>
          <p>Thing one - 3rd place, HackMIT</p>
          <p>Thing one - 3rd place, HackMIT</p>
        </Col>
        <Col md={6}>
          <h4>Volunteer opportunities</h4>
          <p>Web Development</p>
          <p>Good Samaritan</p>
        </Col>
        <Col md={6}>
          <h4>Club Shirt</h4>
          <p></p>
        </Col>
      </Row>
    </Container>
  </Layout>
)

export default IndexPage
