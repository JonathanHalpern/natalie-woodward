import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Project from '../components/project'

const Projects = () => (
  <div>
    <h1>EMPLOYMENT TO DATE</h1>
    <StaticQuery
      query={projectsQuery}
      render={data => {
        return (
          <div>
            {data.allMarkdownRemark.edges.map(edge => (
              <Project data={edge.node} key={edge.node.id} />
            ))}
          </div>
        )
      }}
    />
  </div>
)

export default Projects

const projectsQuery = graphql`
  query {
    allMarkdownRemark(
      filter: { frontmatter: { templateKey: { eq: "project" } } }
    ) {
      edges {
        node {
          id
          html
          frontmatter {
            path
            jobTitle
            company
            startDate
            endDate
          }
        }
      }
    }
  }
`
