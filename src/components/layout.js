/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"

import { Container, Row, Col } from "react-bootstrap"

import Navbar from "./navBar"
import { Helmet } from "react-helmet"

const Layout = ({ children, pageInfo }) => (
  <>
    <Helmet>
      <link rel="icon" href={"images/favicon/favicon.ico"}></link>
    </Helmet>
    <StaticQuery
      query={graphql`
        query SiteTitleQuery {
          site {
            siteMetadata {
              title
            }
          }
        }
      `}
      render={(data) => (
        <>
          <Container fluid className="px-0 main">
            <Navbar pageInfo={pageInfo} />
            <Row noGutters>
              <Col>
                <Container className="mt-5">
                  <main>{children}</main>
                </Container>
              </Col>
            </Row>
          </Container>
          <Container className="px-0">
            <Row noGutters className="justify-content-center" >
              <Col style={{textAlign: "center"}}>
                <Link target="_blank" href="/facebook">
                  Facebook
                </Link>
                &nbsp;|&nbsp;
                <Link target="_blank" href="/discord">
                  Discord
                </Link>
                &nbsp;|&nbsp;
                <Link href="mailto:tamscomputerscience@gmail.com">
                  Email
                </Link>
                <p style={{ fontSize: "0.5rem" }}>© {new Date().getFullYear()}, TAMS CSO</p>
              </Col>
            </Row>
          </Container>

        </>
      )}
    />
  </>
)

export default Layout
