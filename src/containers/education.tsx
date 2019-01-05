import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Project from '../components/project'

export default () => (
  <div>
    <h1>Education</h1>
    <StaticQuery
      query={projectsQuery}
      render={data => (
        <div>
          {data.allMarkdownRemark &&
            data.allMarkdownRemark.edges.map(edge => (
              <Project data={edge.node} key={edge.node.id} />
            ))}
        </div>
      )}
    />
  </div>
)

const projectsQuery = graphql`
  query {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___startDate] }
      filter: { frontmatter: { templateKey: { eq: "course" } } }
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
