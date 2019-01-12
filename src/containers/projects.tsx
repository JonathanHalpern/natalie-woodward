import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Project, { ProjectType } from '../components/project'
import Title from '../components/title'

type EdgeType = {
  node: ProjectType
}

export default () => (
  <div id="projects">
    <Title text="Employment" />
    <StaticQuery
      query={projectsQuery}
      render={data => (
        <div>
          {data.allMarkdownRemark.edges.map((edge: EdgeType) => (
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
