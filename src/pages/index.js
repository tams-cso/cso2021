import React, { useEffect, useState } from "react"
import { Row, Col, Container, ListGroup } from "react-bootstrap"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { getCalendarData } from "../api/Calendar"
// import events from "../data/events.json"

const IndexPage = () => {
  const [events, setEvents] = useState([])

  useEffect(() => {
    getCalendarData()
    .then(data => {
      console.log(data)
      setEvents(data)
    }).catch(console.error)
  }, [])

  return (<Layout pageInfo={{ pageName: "index" }}>
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
          const date = new Date(event.start.date? event.start.date : event.start.dateTime)
          return (
            <p>
              {date.toJSON().substring(0, 10).replaceAll("-", ".") + " @ " + formatAMPM(date)}
              {" + "}
              <a href={event.location} target="_blank" rel="noreferrer">
                {event.summary.replace("CSO - ", "")}
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
        <p>
          <a
            href="https://devpost.com/software/reacting-rod"
            target="_blank"
            rel="noreferrer"
          >
            Reacting Rod
          </a>{" "}
          - Best Hardware, Hacklahoma
        </p>
      </Col>
      <Col md={6}>
        <h4>Volunteer opportunities</h4>
        <p>Web Development</p>
        <p>Open Source Contributions</p>
        <p>Community Projects</p>
        <p>And more!</p>
      </Col>
      {/* <Col md={6}>
        <h4>Club Shirt</h4>
        <p>Coming soon!</p>
      </Col> */}
    </Row>
  </Container>
</Layout>
)

}

function formatAMPM(date) {
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var ampm = hours >= 12 ? 'pm' : 'am';
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? '0'+minutes : minutes;
  var strTime = hours + ':' + minutes + ' ' + ampm;
  return strTime;
}

export default IndexPage
