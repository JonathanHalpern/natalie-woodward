import React, { FC } from 'react'
import { StaticQuery, graphql } from 'gatsby'
import styled from '@emotion/styled'
import { Global, css } from '@emotion/core'

import Header from './header'
import Background from './background'

const mobileWidth = '700px'

const Container = styled.div`
  margin: 20px auto;
  max-width: 480px;
  padding: 0px 1.0875rem 1.45rem;
  padding-top: 0;
  @media (min-width: ${mobileWidth}) {
    max-width: 960px;
  }
`

const Project: FC = ({ children }) => (
  <div>
    <Global
      styles={css`
        h1 {
          margin: 0 0 5px 0;
        }
        h2 {
          margin: 5px 0;
        }
        a {
          text-decoration: none;
        }
        p {
          color: #444;
        }
      `}
    />
    <StaticQuery
      query={layoutQuery}
      render={data => (
        <Background>
          <Header siteTitle={data.site.siteMetadata.title} />
          <Container>{children}</Container>
        </Background>
      )}
    />
  </div>
)

export default Project

const layoutQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
