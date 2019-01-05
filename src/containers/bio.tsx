import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Bio from '../components/bio'

export default () => (
  <div>
    <StaticQuery
      query={projectsQuery}
      render={data => (
        <Bio data={data.markdownRemark} image={data.placeholderImage} />
      )}
    />
  </div>
)

const projectsQuery = graphql`
  query {
    markdownRemark(frontmatter: { templateKey: { eq: "bio" } }) {
      html
      frontmatter {
        templateKey
        name
        title
        dateOfBirth
        email
        mobile
        address
        nationality
        gender
      }
    }
    placeholderImage: file(relativePath: { eq: "profile3.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
