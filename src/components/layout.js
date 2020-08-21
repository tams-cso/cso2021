/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import { StaticQuery, graphql } from "gatsby"

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
          <Container fluid className="px-0">
            <Row noGutters>
              <Col className="footer-col">
                <footer>
                  <span>© {new Date().getFullYear()}, TAMS CSO</span>
                </footer>
              </Col>
            </Row>
          </Container>
        </>
      )}
    />
  </>
)

export default Layout
