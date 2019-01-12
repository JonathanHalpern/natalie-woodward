import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Project, { ProjectType } from '../components/project'
import Title from '../components/title'

type EdgeType = {
  node: ProjectType
}

export default () => (
  <div id="education">
    <Title text="Education" />
    <StaticQuery
      query={projectsQuery}
      render={data => (
        <div>
          {data.allMarkdownRemark &&
            data.allMarkdownRemark.edges.map((edge: EdgeType) => (
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
