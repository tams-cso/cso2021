import React from "react"
import { Link } from "gatsby"
import { Container, Row, Col } from 'react-bootstrap'

import Layout from "../components/layout"
import SEO from "../components/seo"
import committees from '../data/committees.json'

const Committees = () => (
  <Layout pageInfo={{ pageName: "committees" }}>
    <SEO title="Committees" />
    <Container>
      <Row>
        {committees.map((committee) => {
          return (<Col style={{textAlign: "center"}} md={4}>
            <h4 style={{textTransform: "uppercase", fontWeight: 600}}>{committee.name}</h4>
            <p style={{lineHeight: "1.15em"}}>{committee.description}</p>
          </Col>)
        })}
      </Row>
    </Container>
  </Layout>
)

export default Committees
