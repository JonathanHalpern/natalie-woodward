import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Project from '../components/project'

const Projects = () => (
  <div>
    <h1>EDUCATION</h1>
    <StaticQuery
      query={projectsQuery}
      render={data => {
        {
          console.log(data)
        }
        return (
          <div>
            {data.allMarkdownRemark &&
              data.allMarkdownRemark.edges.map(edge => (
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
