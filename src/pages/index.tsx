import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Bio from '../containers/bio'
import Projects from '../containers/projects'
import Education from '../containers/education'
import Interests from '../containers/interests'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={['gatsby', 'application', 'react']} />
    <Bio />
    <Projects />
    <Education />
    <Interests />
  </Layout>
)

export default IndexPage
