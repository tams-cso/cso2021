import React from "react"
import { Row, Col, Container, ListGroup } from "react-bootstrap"

import Layout from "../components/layout"
import SEO from "../components/seo"
import events from "../data/events.json"

const IndexPage = () => (
  <Layout pageInfo={{ pageName: "index" }}>
    <SEO title="Home" keywords={[`gatsby`, `react`, `bootstrap`]} />
    <Container>
      <Row>
        <Col style={{ textAlign: "center" }}>
          <h2>who we are</h2>
          <p>
            The TAMS Computer Science Organization (CSO) exposes students to the
            wide array of topics within computer science such as web
            development, cybersecurity, APIs, hardware, and much more! It
            doesn't matter if you have no experience or you aren't in the CS
            track. Join us as we help you find your passion!
          </p>
        </Col>
      </Row>

      <Row style={{ minHeight: "90vh" }}>
        <Col>
          <h2 style={{ textAlign: "center" }}>events & updates</h2>

          {/* <p>
            08/19 + GA how 2 code: for beginners
          </p>
          <p>
            09/05-07 + Hack-a-thon
          </p>
          <p>

          </p> */}

          {events.map(event => {
            return (
              <p>
                {event.date} +{" "}
                <a href={event.link} target="_blank" rel="noreferrer">
                  {event.description}
                </a>
              </p>
            )
          })}
        </Col>
      </Row>
      <Row>
        <Col md={6}>
          <h4>Hackathon winners</h4>
          <p>
            <a
              href="https://devpost.com/software/tams-student-hub"
              target="_blank"
              rel="noreferrer"
            >
              TAMS Student Hub
            </a>{" "}
            - Hack Track, HackTAMS
          </p>
          <p>
            <a
              href="https://devpost.com/software/trainer-4khlqn"
              target="_blank"
              rel="noreferrer"
            >
              trAIner
            </a>{" "}
            - 3rd Overall, NotUniversity Hacks
          </p>
          <p>
            <a
              href="https://devpost.com/software/clove-nlui4w"
              target="_blank"
              rel="noreferrer"
            >
              Clove
            </a>{" "}
            - Best Overall, Everest
          </p>
        </Col>
        <Col md={6}>
          <h4>Volunteer opportunities</h4>
          <p>Web Development</p>
          <p>Open Source Contributions</p>
          <p>Community Projects</p>
          <p>And more!</p>
        </Col>
        <Col md={6}>
          <h4>Club Shirt</h4>
          <p>Coming soon!</p>
        </Col>
      </Row>
    </Container>
  </Layout>
)

export default IndexPage
