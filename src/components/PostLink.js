import React from "react"
import { Link } from "gatsby"
import { Col } from "react-bootstrap"

const PostLink = ({ post }) => {
  console.log(post)
  return (
    <Col md={6}>
      <Link to={post.frontmatter.slug} className="link-unstyled">
        <h3>{post.frontmatter.title}</h3>
        <h4>
          {post.frontmatter.author} — {post.frontmatter.date}
        </h4>
        <p>{post.excerpt}</p>
      </Link>
    </Col>
  )
}

export default PostLink
