import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Interest from '../components/interest'

const Interests = () => (
  <div>
    <h1>Interests and Achievements</h1>
    <StaticQuery
      query={interestsQuery}
      render={data => {
        return (
          <div>
            {data.allMarkdownRemark.edges.map(edge => (
              <Interest data={edge.node} key={edge.node.id} />
            ))}
          </div>
        )
      }}
    />
  </div>
)

export default Interests

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
