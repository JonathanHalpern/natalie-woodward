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
      sort: { order: DESC, fields: [frontmatter___startDate] }
      filter: { frontmatter: { templateKey: { eq: "project" } } }
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
