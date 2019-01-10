import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import styled from '@emotion/styled'

import Header from './header'
import Background from './background'

const Container = styled.div`
  margin: 20px auto;
  max-width: 960px;
  padding: 0px 1.0875rem 1.45rem;
  padding-top: 0;
`

const OuterContainer = styled.div`
  background: wheat;
`

const Layout = ({ children }) => (
  <StaticQuery
    query={layoutQuery}
    render={data => (
      <Background>
        <Header siteTitle={data.site.siteMetadata.title} />
        <Container>{children}</Container>
      </Background>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

const layoutQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
