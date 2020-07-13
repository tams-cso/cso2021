import React from "react"
import { Link } from "gatsby"
import { Container, Row, Col } from 'react-bootstrap'

import Layout from "../components/layout"
import SEO from "../components/seo"


const DuckDiaries = () => (
  <Layout pageInfo={{ pageName: "duck-diaries" }}>
    <SEO title="Duck Diaries" />
    <Container fluid>
      <Row>
        <Col md={6}>
          <h3>Title</h3>
          <h4>Name — Date</h4>
          <p>Excerpt</p>
        </Col>
      </Row>
    </Container>
  </Layout>
)

export default DuckDiaries
