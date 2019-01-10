import React from 'react'
import Moment from 'react-moment'
import Img from 'gatsby-image'
import styled from '@emotion/styled'
import Button from '@material-ui/core/Button'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import Divider from '@material-ui/core/Divider'
import Content, { HTMLContent } from './content'

const Name = styled.h1`
  text-align: center;
`

const StyledImg = styled(Img)`
  width: 200px;
  border-radius: 50%;
  margin: auto;
  margin-bottom: 10px;
`

export default ({ data, image }) => (
  <div>
    <Name>{data.frontmatter.name}</Name>
    <StyledImg fluid={image.childImageSharp.fluid} />
    <Divider />
    <p>{data.frontmatter.title}</p>
    {/* <p>
      DOB: <Moment format="DD/MM/YYYY">{data.frontmatter.dateOfBirth}</Moment>
    </p>
    <p>Email: {data.frontmatter.email}</p>
    <p>Mobile: {data.frontmatter.mobile}</p>
    <p>Address: {data.frontmatter.address}</p> */}
    <HTMLContent content={data.html} />
    <Button component={AnchorLink} href="#projects">
      Employment
    </Button>
    <Button component={AnchorLink} href="#education">
      Education
    </Button>
    <Button component={AnchorLink} href="#interests">
      Interests
    </Button>
  </div>
)
