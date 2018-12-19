import React from 'react'
import { graphql } from 'gatsby'
import Content, { HTMLContent } from '../components/content'

export default ({ data }) => {
  return (
    <div>
      <h1>{data.markdownRemark.frontmatter.title}</h1>
      <HTMLContent content={data.markdownRemark.html} />
      {console.log(data)}
    </div>
  )
}

export const blogQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        title
      }
    }
  }
`
