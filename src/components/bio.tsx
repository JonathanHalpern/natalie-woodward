import React from 'react'
import Moment from 'react-moment'
import Img from 'gatsby-image'
import { GatsbyImageProps } from 'gatsby-image'
import styled from '@emotion/styled'
import Divider from '@material-ui/core/Divider'
import Content from './content'
import Title from './title'
import ScrollButton from './scrollButton'

const StyledImg = styled(Img)`
  width: 200px;
  border-radius: 50%;
  margin: 10px auto;
`

export type Bio = {
  frontmatter: {
    title: string
    name: string
  }
  html: string
}

type PassedProps = {
  data: Bio
  image: {
    childImageSharp: GatsbyImageProps
  }
}

export default ({ data, image }: PassedProps) => (
  <div>
    <Title text={data.frontmatter.name} />
    <StyledImg fluid={image.childImageSharp.fluid} />
    <Divider />
    <p>{data.frontmatter.title}</p>
    {/* <p>
      DOB: <Moment format="DD/MM/YYYY">{data.frontmatter.dateOfBirth}</Moment>
    </p>
    <p>Email: {data.frontmatter.email}</p>
    <p>Mobile: {data.frontmatter.mobile}</p>
    <p>Address: {data.frontmatter.address}</p> */}
    <Content content={data.html} />
    <ScrollButton href="#projects" text="Employment" />
    <ScrollButton href="#education" text="Education" />
    <ScrollButton href="#interests" text="Interests" />
    <ScrollButton href="#contact" text="Contact" />
  </div>
)
