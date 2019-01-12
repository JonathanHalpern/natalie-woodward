import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Interest, { InterestType } from '../components/interest'
import Title from '../components/title'

type EdgeType = {
  node: InterestType
}

export default () => (
  <div id="interests">
    <Title text="Interests" />
    <StaticQuery
      query={interestsQuery}
      render={data =>
        data.allMarkdownRemark.edges.map((edge: EdgeType) => (
          <Interest data={edge.node} key={edge.node.id} />
        ))
      }
    />
  </div>
)

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
