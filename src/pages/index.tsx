import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Bio from '../containers/bio'
import Projects from '../containers/projects'
import Education from '../containers/education'
import Interests from '../containers/interests'
import styled from '@emotion/styled'

const mobileWidth = '700px'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: ${mobileWidth}) {
    flex-direction: row;
  }
`

const ScrollableContainer = styled.div`
  flex: 1;
  background: white;
  margin: 20px 0 0 0;
  padding: 10px;
  border-radius: 10px;
  @media (min-width: ${mobileWidth}) {
    margin: 0 0 0 30px;
  }
`

const FixedContainer = styled.div`
  @media (min-width: ${mobileWidth}) {
    width: 330px;
  }
`

const FixedInnerContainer = styled.div`
  position: initial;
  background: white;
  width: inherit;
  padding: 10px;
  border-radius: 10px;
  @media (min-width: ${mobileWidth}) {
    position: sticky;
    top: 20px;
    max-height: 94vh;
    overflow: auto;
  }
`

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={['gatsby', 'application', 'react']} />
    <Container>
      <FixedContainer>
        <FixedInnerContainer>
          <Bio />
        </FixedInnerContainer>
      </FixedContainer>
      <ScrollableContainer>
        <Projects />
        <Education />
        <Interests />
      </ScrollableContainer>
    </Container>
  </Layout>
)

export default IndexPage
