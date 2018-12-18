import React from 'react'
import { Link } from 'gatsby'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'

export default ({ data }) => (
  <Layout>
    {console.log(data.allMarkdownRemark.edges)}
    <SEO title="Home" keywords={['gatsby', 'application', 'react']} />
    <h1>Blog</h1>
    {data.allMarkdownRemark.edges.map(edge => (
      <p key={edge.node.id}>{edge.node.excerpt}</p>
    ))}
  </Layout>
)

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            path
            title
          }
        }
      }
    }
  }
`
