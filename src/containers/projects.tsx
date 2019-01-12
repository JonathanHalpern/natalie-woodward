import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import DividedList from '../components/dividedList'
import Project from '../components/project'

export default () => (
  <div id="projects">
    <StaticQuery
      query={projectsQuery}
      render={data => (
        <DividedList
          title="Employment"
          edges={data.allMarkdownRemark.edges}
          Component={Project}
        />
      )}
    />
  </div>
)

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
