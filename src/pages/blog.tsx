import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../containers/layout'
import SEO from '../components/seo'

type BlogType = {
  frontmatter: {
    title: string
  }
  excerpt: string
  html: string
  id: string
}

type EdgeType = {
  node: BlogType
}

type InputProps = {
  data: {
    allMarkdownRemark: {
      edges: Array<EdgeType>
    }
  }
}

export default ({ data }: InputProps) => (
  <Layout>
    <SEO title="Home" keywords={['gatsby', 'application', 'react']} />
    <h1>Blog</h1>
    {data.allMarkdownRemark.edges.map((edge: EdgeType) => (
      <p key={edge.node.id}>{edge.node.excerpt}</p>
    ))}
  </Layout>
)

export const pageQuery = graphql`
  query {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { templateKey: { eq: "blog" } } }
    ) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            path
            title
          }
        }
      }
    }
  }
`
