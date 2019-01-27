import React from 'react'
import Layout from '../containers/layout'
import SEO from '../components/seo'
import Bio from '../containers/bio'
import Projects from '../containers/projects'
import Education from '../containers/education'
import Interests from '../containers/interests'
import Contact from '../containers/contact'
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
  margin: 20px 0 0 0;
  @media (min-width: ${mobileWidth}) {
    margin: 0 0 0 30px;
  }
`

const ScrollableInnerContainer = styled.div`
  background: white;
  padding: 15px;
  border-radius: 10px;
  margin-bottom: 10px;
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
  padding: 15px;
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
    <SEO title="CV" keywords={['gatsby', 'application', 'react']} />
    <Container>
      <FixedContainer>
        <FixedInnerContainer>
          <Bio />
        </FixedInnerContainer>
      </FixedContainer>
      <ScrollableContainer>
        <ScrollableInnerContainer>
          <Projects />
        </ScrollableInnerContainer>
        <ScrollableInnerContainer>
          <Education />
        </ScrollableInnerContainer>
        <ScrollableInnerContainer>
          <Interests />
        </ScrollableInnerContainer>
        <ScrollableInnerContainer>
          <Contact />
        </ScrollableInnerContainer>
      </ScrollableContainer>
    </Container>
  </Layout>
)

export default IndexPage
