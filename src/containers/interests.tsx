import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Interest from '../components/interest'

export default () => (
  <div id="interests">
    <h1>Interests</h1>
    <StaticQuery
      query={interestsQuery}
      render={data => (
        <div>
          {data.allMarkdownRemark.edges.map(edge => (
            <Interest data={edge.node} key={edge.node.id} />
          ))}
        </div>
      )}
    />
  </div>
)

const interestsQuery = graphql`
  query {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___startDate] }
      filter: { frontmatter: { templateKey: { eq: "interest" } } }
    ) {
      edges {
        node {
          id
          html
          frontmatter {
            path
            title
            institution
            startDate
            endDate
            skills
          }
        }
      }
    }
  }
`
