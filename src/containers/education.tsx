import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import DividedList from '../components/dividedList'
import Project from '../components/project'

export default () => (
  <div id="education">
    <StaticQuery
      query={educationQuery}
      render={data => (
        <DividedList
          title="Education"
          edges={data.allMarkdownRemark.edges}
          Component={Project}
        />
      )}
    />
  </div>
)

const educationQuery = graphql`
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
            skills
          }
        }
      }
    }
  }
`
