import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Projects from '../containers/projects'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={['gatsby', 'application', 'react']} />
    <Projects />
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
