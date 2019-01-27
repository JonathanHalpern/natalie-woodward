import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Interest from '../components/interest'
import DividedList from '../components/dividedList'

export default () => (
  <div id="interests">
    <StaticQuery
      query={interestsQuery}
      render={data => (
        <DividedList
          title="Interests"
          edges={data.allMarkdownRemark.edges}
          Component={Interest}
        />
      )}
    />
  </div>
)

const interestsQuery = graphql`
  query {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___endDate, id] }
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
          }
        }
      }
    }
  }
`
