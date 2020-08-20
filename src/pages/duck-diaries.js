import React from "react"
import { Container, Row } from "react-bootstrap"

import Layout from "../components/layout"
import SEO from "../components/seo"
import PostLink from "../components/PostLink"

const DuckDiaries = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  const Posts = edges
    .filter(edge => !!edge.node.frontmatter.date) // You can filter your posts based on some criteria
    .map(edge => <PostLink key={edge.node.id} post={edge.node} />)

  return (
    <Layout pageInfo={{ pageName: "duck-diaries" }}>
      <SEO title="Duck Diaries" />
      <Container fluid>
        <Row>{Posts}</Row>
      </Container>
    </Layout>
  )
}
export default DuckDiaries

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            slug
            title
            author
          }
        }
      }
    }
  }
`
