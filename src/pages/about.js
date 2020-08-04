import React from "react"
import { Link } from "gatsby"
import { Container, Row, Col } from "react-bootstrap"

import Layout from "../components/layout"
import SEO from "../components/seo"
import FAQ from "../data/faq.json"
import execs from "../data/execs.json"

const About = () => (
  <Layout pageInfo={{ pageName: "about" }}>
    <SEO title="about" />
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

      <Row style={{ marginBottom: "0.5rem" }}>
        <h2 style={{ margin: "auto" }}>the execs</h2>
      </Row>
      <Row>
        {execs.map(({ name, role, desc, picId }) => {
          return (
            <Col
              lg
              md={4}
              style={{ textAlign: "center", margin: "auto", marginTop: "0" }}
            >
              <img
                className="execImages"
                src={"http://drive.google.com/uc?id=" + picId}
                style={{ maxWidth: "100%", height: "auto" }}
              ></img>
              <h4
                style={{ marginBottom: "0" }}
                dangerouslySetInnerHTML={{ __html: name.replace(" ", "<br>") }}
              ></h4>
              <p
                style={{
                  height: "1rem",
                  fontSize: "0.7rem",
                  margin: "0.1rem 0 0.4rem 0",
                }}
              >
                {role}
              </p>
              <p>{desc}</p>
            </Col>
          )
        })}
      </Row>
      <Row>
        <Col style={{ textAlign: "center" }}>
          <h2>FAQ</h2>
          {FAQ.map(({ question, answer }) => {
            return (
              <>
                <Row>
                  <p>{question}</p>
                </Row>
                <Row>
                  <p
                    style={{ textAlign: "right" }}
                    dangerouslySetInnerHTML={{ __html: answer }}
                  ></p>
                </Row>
              </>
            )
          })}
        </Col>
      </Row>
      <Row>
        <Col style={{ textAlign: "center" }}>
          <h2>resources</h2>
          <p></p>
        </Col>
      </Row>
    </Container>
  </Layout>
)

export default About
